import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '@/components/Common/Modal';
import Button from '@/components/Common/Button';
import { GOOGLE_AUTH_RESOURCE_SERVER_URL } from '@/constants/url';

export default function LoginModal({ onClose, open }) {
    const location = useLocation();
    const handleOnSubmit = () => {
        const stateParam = `&state={"referrer":"${location.pathname}"}`;
        window.location.href = GOOGLE_AUTH_RESOURCE_SERVER_URL + stateParam;
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Title>로그인</Title>
            <Button
                text="Sign in with Google"
                size="medium"
                onClick={handleOnSubmit}
            />
        </Modal>
    );
}

const Title = styled.h1`
    margin-bottom: 30px;
`;
