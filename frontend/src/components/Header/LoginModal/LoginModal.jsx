import React from 'react';
import styled from 'styled-components';
import Modal from '@/components/Common/Modal';
import Button from '@/components/Common/Button';

export default function LoginModal({ onClose }) {
    return (
        <Modal open onClose={onClose}>
            <Title>로그인</Title>
            <Button text="Sign in with Github" size="medium" />
        </Modal>
    );
}

const Title = styled.h1`
    margin-bottom: 30px;
`;
