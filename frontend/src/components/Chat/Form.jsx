import React, { useRef, useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { v1 } from 'uuid';

import { borderBoxMixin, fontMixin } from '@/styles/mixins';
import { UserContext } from '@/store/userStore';

import DonationModal from './DonationModal';
import LoginAlertModal from './LoginAlertModal';

export default function Form({ handleSubmit }) {
    const messageInput = useRef();
    const { userInfo } = useContext(UserContext);
    const { user } = userInfo;

    const [modalOpen, setModalOpen] = useState(false);
    const [openLoginAlert, setOpenLoginAlert] = useState(false);

    const handleShowModal = handler => {
        handler(true);
    };

    const handleHideModal = handler => {
        handler(false);
    };

    const handleClickDonation = value => {
        const message = {
            id: v1(),
            type: 'DONATION',
            userId: user.id,
            nickname: user.nickname,
            content: value,
        };
        handleSubmit(message);
        setModalOpen(false);
    };

    const handleClickAlert = () => {
        setOpenLoginAlert(false);
    };

    const sendMessage = e => {
        e.preventDefault();
        const txt = messageInput.current.value;
        if (txt === '') return;

        if (!userInfo.isSignIn) {
            setOpenLoginAlert(true);
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
            {modalOpen && (
                <DonationModal
                    open
                    onClose={() => handleHideModal(setModalOpen)}
                    onSuccess={handleClickDonation}
                />
            )}
            {openLoginAlert && (
                <LoginAlertModal
                    open
                    onClose={() => handleHideModal(setOpenLoginAlert)}
                    onSuccess={handleClickAlert}
                />
            )}
            <StyledForm onSubmit={sendMessage}>
                <StyledDiv>
                    <StyledInput ref={messageInput} />
                </StyledDiv>
                <StyledDiv>
                    <StyledButton type="button" onClick={handleShowModal}>
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
