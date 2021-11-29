import React, { useRef, useContext } from 'react';
import styled, { css } from 'styled-components';

import { borderBoxMixin } from '@/styles/mixins';
import { UserContext } from '@/store/UserStore';
import { ModalContext } from '@/store/ModalStore';
import { makeChatMessage } from '@/util';

import { Button, Box } from '@/components/Common';
import {
    LoginAlertModalContent,
    DonationModalContent,
} from '@/components/ModalContent';

export default function ChatForm({ handleSubmit, isDonation }) {
    const messageInputRef = useRef();
    const {
        userInfo: { user, isSignIn },
    } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);

    const handleDonationButtonClick = content => {
        const chatMessage = makeChatMessage({
            type: 'DONATION',
            user,
            content,
        });
        handleSubmit(chatMessage);
    };

    const openLoginAlertModal = () => {
        openModal(<LoginAlertModalContent />);
    };

    const openDonationModal = () => {
        openModal(
            <DonationModalContent onDonation={handleDonationButtonClick} />,
        );
    };

    const sendMessage = e => {
        e.preventDefault();
        const content = messageInputRef.current.value;
        if (content === '') return;

        if (!isSignIn) {
            openLoginAlertModal();
            return;
        }

        const chatMessage = makeChatMessage({
            type: 'NORMAL',
            user,
            content,
        });
        handleSubmit(chatMessage);
        messageInputRef.current.value = '';
    };
    return (
        <StyledForm onSubmit={sendMessage}>
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
