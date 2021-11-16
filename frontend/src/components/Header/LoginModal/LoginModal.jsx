import React from 'react';
import styled from 'styled-components';
import Modal from '@/components/Common/Modal';
import Button from '@/components/Common/Button';
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from '@/constants/oauth';

export default function LoginModal({ onClose, open }) {
    const handleOnSubmit = async () => {
        window.location.href =
            `https://accounts.google.com/o/oauth2/v2/auth?` +
            `scope=profile&` +
            ` access_type=offline&` +
            `include_granted_scopes=true&` +
            `response_type=code&` +
            `state=state_parameter_passthrough_value&` +
            `redirect_uri=${GOOGLE_REDIRECT_URI}&` +
            `client_id=${GOOGLE_CLIENT_ID}`;
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
