import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Box } from '@/components/Common';
import useScroll from '@/hooks/useScroll';
import ChatMessage from './ChatMessage';

export default function ChatMessageList({
    messageList,
    filterUnsentMessage,
    deleteMessage,
}) {
    const isScrollBottomRef = useRef(false);
    const { scrollRef, isScrollBottom, moveScrollToBottom } = useScroll();

    const handleOnScroll = () => {
        if (!isScrollBottom()) {
            isScrollBottomRef.current = false;
        } else {
            isScrollBottomRef.current = true;
        }
    };

    const handleChatMessageScroll = () => {
        const { current: isScrollBottom } = isScrollBottomRef;

        if (isScrollBottom) {
            moveScrollToBottom();
        }
    };

    const renderMessageList = () => {
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
        handleChatMessageScroll();
    }, [messageList]);

    return (
        <StyledBox
            onScroll={handleOnScroll}
            flex={1}
            height="100%"
            ref={scrollRef}
        >
            <MessageListBox
                width="100%"
                flexDirection="column"
                alignItems="flex-start"
                flex={1}
            >
                {renderMessageList()}
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
