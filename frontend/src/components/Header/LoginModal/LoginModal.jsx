import React from 'react';
import styled from 'styled-components';
import Modal from '@/components/Common/Modal';
import Button from '@/components/Common/Button';
import { GOOGLE_AUTH_RESOURCE_SERVER_URL } from '@/constants/url';

export default function LoginModal({ onClose, open }) {
    const handleOnSubmit = () => {
        window.location.href = GOOGLE_AUTH_RESOURCE_SERVER_URL;
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Title>로그인</Title>
            <Button
                text="Sign in with Github"
                size="medium"
                onClick={handleOnSubmit}
            />
        </Modal>
    );
}

const Title = styled.h1`
    margin-bottom: 30px;
`;
