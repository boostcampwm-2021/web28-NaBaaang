import React from 'react';
import styled, { css } from 'styled-components';
import { borderBoxMixin } from '@/styles/mixins';
import Message from './Message';

export default function MessageList({ messageList }) {
    function createMessages() {
        return messageList.map(message => (
            <Message
                key={message.id}
                type={message.type}
                nickname={message.nickname}
                content={message.content}
            />
        ));
    }
    return <StyledMessageList>{createMessages()}</StyledMessageList>;
}
const StyledMessageList = styled.div`
    width: 100%;
    height: 600px;
    list-style: none;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ${({ theme }) => borderBoxMixin('1px', '10px', theme.color.black)}
    ${({ theme }) => css`
        ::-webkit-scrollbar-thumb {
            background-color: ${theme.color.primary};
            border-radius: 10px;
        }
    `}
`;
