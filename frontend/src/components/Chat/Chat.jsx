import React from 'react';

import socket from '@/socket';
import useChatMessage from '@/hooks/useChatMessage';

import Box from '@/components/Common/Box';
import Form from './Form';
import MessageList from './MessageList';

export default function Chat({ role }) {
    const { messageList } = useChatMessage();

    const handleSubmit = message => {
        if (role !== 'ALL') {
            alert('채팅을 하기 위해서는 로그인이 필요합니다');
            return null;
        }
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
