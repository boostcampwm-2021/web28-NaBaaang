import React from 'react';
import styled, { css } from 'styled-components';
import { borderBoxMixin } from '@/styles/mixins';
import Box from '@/components/Common/Box';
import Message from './Message';

export default function MessageList({ messageList }) {
    const convertedMessageList =
        messageList &&
        messageList.map(message => (
            <Message
                key={message.id}
                type={message.type}
                nickname={message.nickname}
                content={message.content}
            />
        ));

    return (
        <StyledBox border={1} flexDirection="column" width="100%" height="100%">
            {convertedMessageList}
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    height: 500px;
    max-height: 500px;
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
