import { Button, TextField } from '@mui/material';
import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin-top: 1rem;
`;

export default function Form({ handleSubmit }) {
    const messageInput = useRef();

    const sendMessage = e => {
        e.preventDefault();
        handleSubmit(messageInput.current.value);
    };

    return (
        <StyledForm onSubmit={sendMessage}>
            <div>
                <TextField
                    fullWidth
                    label="메시지 입력"
                    variant="filled"
                    inputRef={messageInput}
                />
            </div>
            <div style={{ float: 'right', marginTop: '1rem' }}>
                <Button
                    style={{ margin: '0 0.5rem' }}
                    variant="contained"
                    color="primary"
                    type="button"
                >
                    도네이션
                </Button>
                <Button
                    style={{ margin: '0 0.5rem' }}
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={sendMessage}
                >
                    채팅
                </Button>
            </div>
        </StyledForm>
    );
}
