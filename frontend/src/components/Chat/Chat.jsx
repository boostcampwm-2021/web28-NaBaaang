import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexMixin } from '@/styles/mixins';
import Box from '@/components/Common/Box';
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
        <Wapper>
            <Box flexDirection="column" width="100%" height="100%">
                <Box width="100%" flex={3}>
                    <MessageList messageList={messageList} />
                </Box>
                <Box width="100%" flex={1}>
                    <Form
                        messageList={messageList}
                        setMessageList={setMessageList}
                        handleSubmit={handleSubmit}
                    />
                </Box>
            </Box>
        </Wapper>
    );
}

const Wapper = styled.div`
    width: 100%;
    height: 100%;
    ${flexMixin('row', 'flex-start')}
`;

// const StyledChat = styled.div`
//     width: 100%;
//     height: 100%;
//     padding: 20px;
//     box-sizing: border-box;
//     ${({ theme }) => borderBoxMixin('1px', '0', theme.color.black)};
// `;
