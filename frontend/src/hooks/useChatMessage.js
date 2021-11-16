import { useEffect } from 'react';

import { go } from '@/util/fp';

import socket from '@/socket';
import useBuffer from './useBuffer';
import useArray from './useArray';

const THROTTLE_LIMIT = 50;
const BUFFER_LIMIT = 50;
const MESSAGE_LIMIT = 20;

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
