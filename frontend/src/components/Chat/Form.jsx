import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { borderBoxMixin, fontMixin } from '@/styles/mixins';

export default function Form({ handleSubmit }) {
    const messageInput = useRef();

    const sendMessage = e => {
        e.preventDefault();
        const txt = messageInput.current.value;
        if (txt === '') return;

        const message = {
            id: 10,
            type: 'NORMAL',
            nickname: 'undefined',
            content: txt,
        };
        
        handleSubmit(message);
        messageInput.current.value = '';
    };
    return (
        <StyledForm onSubmit={sendMessage}>
            <StyledDiv>
                <StyledInput ref={messageInput} />
            </StyledDiv>
            <StyledDiv>
                <StyledButton>도네이션</StyledButton>
                <StyledButton>채팅</StyledButton>
            </StyledDiv>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    margin-top: 1rem;
`;
const StyledDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1em 0;
`;
const StyledInput = styled.input`
    width: 100%;
    height: 3em;
    ${({ theme }) =>
        css`
            background-color: ${theme.color.offwhite};
            ${borderBoxMixin('0', '0.6em', theme.color.black)}
        `}
`;
const StyledButton = styled.button`
    margin: 0 0.1em;
    padding: 0.5em 1em;
    ${({ theme }) =>
        css`
            background-color: ${theme.color.primary};
            ${borderBoxMixin('1px', '0.6em', theme.color.black)}
            ${fontMixin('1em', '1em', 'notoSansMedium', theme.color.white)}
        `}
`;
