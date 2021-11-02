import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { borderBoxMixin } from '@/styles/mixin';
import Form from './Form';
import MessageList from './MessageList';

const StyledChat = styled.div`
    width: 400px;
    height: 800px;
    padding: 20px;
    ${({ theme }) => borderBoxMixin('1px', '0', theme.color.black)};
`;

export default function Chat() {
    const [messageList, setMessageList] = useState([]);

    /**
     * todo: socket 통신으로 messageList set
     */
    useEffect(() => {
        setMessageList([]);
    }, []);

    /**
     * todo: message socket 전송
     * @param {*} message
     */
    const handleSubmit = message => {
        console.log(message);
    };

    return (
        <StyledChat>
            <MessageList messageList={messageList} />
            <Form handleSubmit={handleSubmit} />
        </StyledChat>
    );
}
