import React, { useState, useEffect } from 'react';

import { ChatSocket } from '@/socket';

import Box from '@/components/Common/Box';
import Form from './Form';
import MessageList from './MessageList';

let messageBuffer = [];

// function throttle(callback, limit) {
//     let waiting = false;
//     return (...args) => {
//         if (!waiting) {
//             callback.apply(this, args);
//             waiting = true;
//             setTimeout(() => {
//                 waiting = false;
//             }, limit);
//         }
//     };
// }

export default function Chat() {
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        ChatSocket.on('chat', message => {
            messageBuffer.push(message);
            if (messageBuffer.length >= 3) {
                setMessageList(prev => [...prev, ...messageBuffer]);
                messageBuffer = [];
            }
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
            <Box width="100%" flex={3}>
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
