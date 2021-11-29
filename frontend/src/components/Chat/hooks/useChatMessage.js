import { useEffect } from 'react';

import { go } from '@/util/fp';
import socket from '@/socket';

import useBuffer from '@/hooks/useBuffer';
import useArray from '@/hooks/useArray';
import useThrottle from '@/hooks/useThrottle';

const THROTTLE_LIMIT = 50;
const BUFFER_LIMIT = 50;
const MESSAGE_LIMIT = 150;

export default function useChatMessage() {
    const { arr: messageList, set: setMessageList } = useArray([]);
    const { isBufferFull, flushBuffer, getBufferList, pushBuffer } =
        useBuffer(BUFFER_LIMIT);

    const concatBufferToMessage = msg => msg.concat(getBufferList());
    const sliceMessage = msg => msg.slice(-MESSAGE_LIMIT);

    const handleMessageSetState = prevMsg => {
        return go(prevMsg, concatBufferToMessage, sliceMessage);
    };

    const updateMessage = () => {
        setMessageList(handleMessageSetState);
        flushBuffer();
    };

    const onThrottle = useThrottle(updateMessage, THROTTLE_LIMIT, isBufferFull);

    const throttleNewMessage = msg => {
        pushBuffer(msg);
        onThrottle();
    };

    const getMessageIdxToRemove = unsentMessageList => {
        const toRemove = [];
        unsentMessageList.forEach(unsent => {
            const idxToRemove = messageList.findIndex(
                message => message.id === unsent.id && message.status,
            );
            toRemove.push(idxToRemove);
        });
        return toRemove;
    };

    const removeUnsentFromMessageList = toRemove => {
        return messageList.filter((_, idx) => !toRemove.includes(idx));
    };

    const filterUnsentMessage = () => {
        const unsentMessageList = messageList.filter(x => x.status === false);
        if (unsentMessageList.length) {
            return go(
                unsentMessageList,
                getMessageIdxToRemove,
                removeUnsentFromMessageList,
            );
        }
        return messageList;
    };

    const deleteMessage = id => () => {
        setMessageList(prev => prev.filter(x => x.id !== id));
    };

    useEffect(() => {
        socket.chat.onMessage(throttleNewMessage);
        return () => {
            socket.chat.clearChatEvents();
        };
    }, []);

    return {
        messageList,
        filterUnsentMessage,
        deleteMessage,
        throttleNewMessage,
    };
}
