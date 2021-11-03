import React from 'react';
import styled from 'styled-components';
import Modal from '@/components/Modal';
import Button from '@/components/Button';

export default function LoginModal() {
    return (
        <Modal open>
            <Title>로그인</Title>
            <Button text="Sign in with Github" size="medium" />
        </Modal>
    );
}

const Title = styled.h1`
    margin-bottom: 30px;
`;
