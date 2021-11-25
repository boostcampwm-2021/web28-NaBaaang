import React from 'react';

import socket from '@/socket';
import useChatMessage from '@/hooks/useChatMessage';

import Box from '@/components/Common/Box';
import Form from './Form';
import MessageList from './MessageList';

export default function Chat() {
    const {
        messageList,
        filterUnsentMessage,
        deleteMessage,
        throttleNewMessage,
    } = useChatMessage();

    const handleSubmit = message => {
        throttleNewMessage({ ...message, status: true });
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
            <Box width="100%" flex={5} backgroundColor="white">
                <MessageList
                    messageList={messageList}
                    filterUnsentMessage={filterUnsentMessage}
                    deleteMessage={deleteMessage}
                />
            </Box>
            <Box width="100%" flex={1}>
                <Form handleSubmit={handleSubmit} />
            </Box>
        </Box>
    );
}
