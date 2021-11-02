import React from 'react';
import styled, { css } from 'styled-components';
import { borderBoxMixin } from '@/styles/mixin';
import Message from './Message';

const StyledMessageList = styled.ul`
    width: 100%;
    height: 80%;
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

export default function MessageList({ messageList }) {
    function getMessageList() {
        return messageList.map(message => (
            <Message nickname={message.nickname} content={message.content} />
        ));
    }
    return <StyledMessageList>{getMessageList()}</StyledMessageList>;
}
