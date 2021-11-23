import React, { useRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { v1 } from 'uuid';

import { borderBoxMixin, fontMixin } from '@/styles/mixins';

import { UserContext } from '@/store/userStore';
import { ModalContext } from '@/store/ModalStore';
import DonationModal from './DonationModal';
import LoginAlertModal from './LoginAlertModal';

export default function Form({ handleSubmit }) {
    const messageInput = useRef();
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
        const txt = messageInput.current.value;
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
        messageInput.current.value = '';
    };
    return (
        <>
            <StyledForm onSubmit={sendMessage}>
                <StyledDiv>
                    <StyledInput ref={messageInput} />
                </StyledDiv>
                <StyledDiv>
                    <StyledButton type="button" onClick={openDonationModal}>
                        도네이션
                    </StyledButton>
                    <StyledButton>채팅</StyledButton>
                </StyledDiv>
            </StyledForm>
        </>
    );
}

const StyledForm = styled.form`
    width: 100%;
    height: 100%;
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
