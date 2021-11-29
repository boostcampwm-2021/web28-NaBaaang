import React, { useRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { v1 } from 'uuid';

import { borderBoxMixin } from '@/styles/mixins';
import { UserContext } from '@/store/UserStore';
import { ModalContext } from '@/store/ModalStore';
import { ROLE } from '@/constants/role';

import { Button, Box } from '@/components/Common';
import {
    LoginAlertModalContent,
    DonationModalContent,
} from '@/components/ModalContent';

export default function Form({ role, handleSubmit, isDonation }) {
    const messageInputRef = useRef();
    const {
        userInfo: { user },
    } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);

    const roleCheck = () => {
        if (role === ROLE.ALL) return true;
        openModal(<LoginAlertModalContent />);
        return false;
    };

    const handleDonationButtonClick = value => {
        if (roleCheck()) {
            const message = {
                id: v1(),
                type: 'DONATION',
                userId: user.id,
                nickname: user.nickname,
                content: value,
            };
            handleSubmit(message);
        }
    };

    const openDonationModal = () => {
        openModal(
            <DonationModalContent onDonation={handleDonationButtonClick} />,
        );
    };

    const sendMessage = e => {
        e.preventDefault();
        const txt = messageInputRef.current.value;
        if (txt === '') return;

        if (roleCheck()) {
            const message = {
                id: v1(),
                type: 'NORMAL',
                userId: user.id,
                nickname: user.nickname,
                content: txt,
            };
            handleSubmit(message);
            messageInputRef.current.value = '';
        }
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
