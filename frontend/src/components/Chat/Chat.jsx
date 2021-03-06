import React from 'react';

import socket from '@/socket';
import Box from '@/components/Common/Box';

import ChatMessageList from './ChatMessageList';
import ChatForm from './ChatForm';

import useChatMessage from './hooks/useChatMessage';

export default function Chat({ role, isDonation = true }) {
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
            <Box width="100%" flex={5} backgroundColor="white" marginBottom={1}>
                <ChatMessageList
                    messageList={messageList}
                    filterUnsentMessage={filterUnsentMessage}
                    deleteMessage={deleteMessage}
                />
            </Box>
            <Box width="100%" flex={1}>
                <ChatForm
                    role={role}
                    handleSubmit={handleSubmit}
                    isDonation={isDonation}
                />
            </Box>
        </Box>
    );
}
