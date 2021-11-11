import React, { useState, useEffect, useRef } from 'react';

import ChatSocket from '@/socket';

import Box from '@/components/Common/Box';
import Form from './Form';
import MessageList from './MessageList';

const CHAT_DELAY_TIME = 50;
const BUFFER_SIZE_LIMIT = 50;
const MESSAGE_LIMIT = 1000;

export default function Chat() {
    const [messageList, setMessageList] = useState([]);
    const messageBuffer = useRef([]);

    const isMessageBufferOverflow = () => {
        return (
            messageBuffer.current.length + messageList.length > MESSAGE_LIMIT
        );
    };
    const isBufferFull = () => messageBuffer.current.length > BUFFER_SIZE_LIMIT;

    const updateFromBuffer = () => {
        if (!isMessageBufferOverflow()) {
            setMessageList(prev => [...prev, ...messageBuffer.current]);
        } else {
            setMessageList(prev =>
                [...prev, ...messageBuffer.current].slice(-MESSAGE_LIMIT),
            );
        }
        messageBuffer.current = [];
    };

    const throttle = (callback, limit) => {
        let waiting = false;
        let id;
        return message => {
            messageBuffer.current.push(message);
            if (!waiting) {
                waiting = true;
                id = setTimeout(() => {
                    callback.apply(this);
                    waiting = false;
                }, limit);
            }
            if (isBufferFull()) {
                clearTimeout(id);
                waiting = false;
                callback.apply(this);
            }
        };
    };

    useEffect(() => {
        const saveMessageInBuffer = throttle(updateFromBuffer, CHAT_DELAY_TIME);
        ChatSocket.on('chat', message => {
            saveMessageInBuffer(message);
        });
    }, []);

    const handleSubmit = message => {
        ChatSocket.emit('chat', { message });
    };

    return (
        <Box
            flexDirection="column"
            justifyContent="flex-start"
            flex={1}
            height="100%"
        >
            <Box width="100%" flex={3} backgroundColor="white">
                <MessageList messageList={messageList} />
            </Box>
            <Box width="100%" flex={1}>
                <Form
                    messageList={messageList}
                    setMessageList={setMessageList}
                    handleSubmit={handleSubmit}
                />
            </Box>
        </Box>
    );
}
