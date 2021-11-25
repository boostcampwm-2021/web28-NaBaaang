import React, { useRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { v1 } from 'uuid';

import { borderBoxMixin } from '@/styles/mixins';
import { UserContext } from '@/store/userStore';
import { ModalContext } from '@/store/ModalStore';

import { Button, Box } from '@/components/Common';
import DonationModal from './DonationModal';
import LoginAlertModal from './LoginAlertModal';

export default function Form({ handleSubmit, isDonation }) {
    const messageInputRef = useRef();
    const { userInfo } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);

    const { user } = userInfo;

    const handleDonationButtonClick = value => {
        const message = {
            id: v1(),
            type: 'DONATION',
            userId: user.id,
            nickname: user.nickname,
            content: value,
        };
        handleSubmit(message);
    };

    const openLoginAlertModal = () => {
        openModal(<LoginAlertModal />);
    };

    const openDonationModal = () => {
        openModal(<DonationModal onDonation={handleDonationButtonClick} />);
    };

    const sendMessage = e => {
        e.preventDefault();
        const txt = messageInputRef.current.value;
        if (txt === '') return;

        if (!userInfo.isSignIn) {
            openLoginAlertModal();
            return;
        }

        const message = {
            id: v1(),
            type: 'NORMAL',
            userId: user.id,
            nickname: user.nickname,
            content: txt,
        };
        handleSubmit(message);
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
    padding : 0 1rem;
    ${({ theme }) =>
        css`
            background-color: ${theme.color.offwhite};
            ${borderBoxMixin('0', '0.6em', theme.color.black)}
        `}
`;
