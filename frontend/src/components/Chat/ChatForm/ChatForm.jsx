import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import { borderBoxMixin } from '@/styles/mixins';

import { Button, Box } from '@/components/Common';
import useChatForm from './useChatForm';

export default function Form({ role, handleSubmit, isDonation }) {
    const messageInputRef = useRef();
    const { sendTextMessage, openDonationModal } = useChatForm({
        role,
        ref: messageInputRef,
        handleSubmit,
    });

    return (
        <StyledForm onSubmit={sendTextMessage}>
            <Box marginBottom={1}>
                <StyledInput ref={messageInputRef} />
            </Box>
            <Box justifyContent="flex-end">
                {isDonation && (
                    <Button
                        color="success"
                        text="도네이션"
                        onClick={openDonationModal}
                        marginRight={1}
                        type="button"
                    />
                )}

                <Button color="success" text="채팅" type="submit" />
            </Box>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    width: 100%;
    height: 100%;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 3em;
    padding: 0 1rem;
    ${({ theme }) =>
        css`
            background-color: ${theme.color.offwhite};
            ${borderBoxMixin('0', '0.6em', theme.color.black)}
        `}
`;
