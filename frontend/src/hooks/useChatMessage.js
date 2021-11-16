import { useEffect } from 'react';

import socket from '@/socket';
import useBuffer from './useBuffer';
import useArray from './useArray';

const THROTTLE_LIMIT = 50;
const BUFFER_LIMIT = 50;
const MESSAGE_LIMIT = 20;

export default function useChatMessage() {
    const { arr: messageList, set: setMessageList } = useArray([]);
    const {
        isBufferFull,
        flushBuffer,
        getBufferList,
        getBufferLength,
        pushBuffer,
    } = useBuffer(BUFFER_LIMIT);

    const isMessageFull = prevMsg => {
        const bufferLength = getBufferLength();
        const messageLength = prevMsg.length;
        return bufferLength + messageLength > MESSAGE_LIMIT;
    };

    const getMessageSliceIndex = prevMsg => {
        return isMessageFull(prevMsg) ? -MESSAGE_LIMIT : 0;
    };

    const handleMessageSetState = prevMsg => {
        const sliceIndex = getMessageSliceIndex(prevMsg);
        const bufferList = getBufferList();
        return [...prevMsg, ...bufferList].slice(sliceIndex);
    };

    const updateMessage = () => {
        setMessageList(handleMessageSetState);
        flushBuffer();
    };

    const onThrottle = (callback, limit) => {
        let waiting = false;
        let id;
        return message => {
            pushBuffer(message);
            if (!waiting) {
                waiting = true;
                id = setTimeout(() => {
                    waiting = false;
                    callback.apply(this);
                }, limit);
            }
            if (isBufferFull()) {
                clearTimeout(id);
                waiting = false;
                callback.apply(this);
            }
        };
    };

    const handleSocketMessage = onThrottle(updateMessage, THROTTLE_LIMIT);

    useEffect(() => {
        socket.chat.handleReceivedMessage(handleSocketMessage);
        return () => {
            socket.chat.clearChatEvents();
        };
    }, []);

    return { messageList };
}
