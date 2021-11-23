import React from 'react';

import socket from '@/socket';
import useChatMessage from '@/hooks/useChatMessage';

import Box from '@/components/Common/Box';
import Form from './Form';
import MessageList from './MessageList';

export default function Chat() {
    const { messageList, throttleNewMessage } = useChatMessage();

    const handleSubmit = message => {
        throttleNewMessage(message);
        socket.chat.sendMessage(message);
        return () => {
            socket.chat.clearChatEvents();
        };
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
                <Form handleSubmit={handleSubmit} />
            </Box>
        </Box>
    );
}
