import React, { useEffect, useRef } from 'react';

import styled, { css } from 'styled-components';

import Box from '@/components/Common/Box';
import ChatMessage from './ChatMessage';

export default function ChatMessageList({
    messageList,
    filterUnsentMessage,
    deleteMessage,
}) {
    const messageBoxRef = useRef();

    const scrollToBottom = () => {
        if (messageBoxRef.current) {
            messageBoxRef.current.scrollTop =
                messageBoxRef.current.scrollHeight;
        }
    };

    const convertedMessageList = () => {
        const filtered = filterUnsentMessage();
        return (
            filtered &&
            filtered.map(message => (
                <ChatMessage
                    key={message.id}
                    id={message.id}
                    type={message.type}
                    nickname={message.nickname}
                    content={message.content}
                    status={message.status}
                    onDelete={deleteMessage}
                />
            ))
        );
    };

    useEffect(() => {
        scrollToBottom();
    }, [messageList]);

    return (
        <StyledBox flex={1} height="100%" ref={messageBoxRef}>
            <MessageListBox
                width="100%"
                flexDirection="column"
                alignItems="flex-start"
                flex={1}
            >
                {convertedMessageList()}
            </MessageListBox>
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    overflow: hidden;
    list-style: none;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ${({ theme }) => css`
        ::-webkit-scrollbar-thumb {
            background-color: ${theme.color.primary};
            border-radius: 10px;
        }
    `}
`;

const MessageListBox = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
`;
