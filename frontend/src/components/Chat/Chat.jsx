import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { borderBoxMixin } from '@/styles/mixins';
import Form from './Form';
import MessageList from './MessageList';

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
        setMessageList([...messageList, message]);
    };

    return (
        <StyledChat>
            <MessageList messageList={messageList} />
            <Form
                messageList={messageList}
                setMessageList={setMessageList}
                handleSubmit={handleSubmit}
            />
        </StyledChat>
    );
}

const StyledChat = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    ${({ theme }) => borderBoxMixin('1px', '0', theme.color.black)};
`;
