import React, { useState, useEffect } from 'react';
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
        <Box
            flexDirection="column"
            justifyContent="flex-start"
            flex={1}
            height="100%"
        >
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
    );
}
