import { useState, useEffect } from 'react';

import socket from '@/socket';
import useBuffer from './useBuffer';

const THROTTLE_LIMIT = 50;
const BUFFER_LIMIT = 50;
const MESSAGE_LIMIT = 20;

export default function useChatMessage() {
    const [messageList, setMessageList] = useState([]);
    const {
        isBufferFull,
        flushBuffer,
        getBufferList,
        getBufferLength,
        pushBuffer,
    } = useBuffer(BUFFER_LIMIT);

    const isMessageFull = prevMessageList => {
        const bufferLength = getBufferLength();
        return bufferLength + prevMessageList.length > MESSAGE_LIMIT;
    };

    const handleGetMessageSliceIndex = prevMessageList => {
        return isMessageFull(prevMessageList) ? -MESSAGE_LIMIT : 0;
    };

    const handleMessageSetState = prevMessageList => {
        const sliceIndex = handleGetMessageSliceIndex(prevMessageList);
        const bufferList = getBufferList();
        return [...prevMessageList, ...bufferList].slice(sliceIndex);
    };

    const handleUpdateMessageList = () => {
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

    const handleSocketMessage = onThrottle(
        handleUpdateMessageList,
        THROTTLE_LIMIT,
    );

    useEffect(() => {
        socket.chat.handleReceivedMessage(handleSocketMessage);
        return () => {
            socket.chat.clearChatEvents();
        };
    }, []);

    return { messageList };
}
