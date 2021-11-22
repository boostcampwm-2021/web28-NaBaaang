import React from 'react';

import { GOOGLE_AUTH_RESOURCE_SERVER_URL } from '@/constants/url';

import { Modal, Button, Typography } from '@/components/Common';

export default function LoginModal({ onClose, open }) {
    const handleOnSubmit = () => {
        window.location.href = GOOGLE_AUTH_RESOURCE_SERVER_URL;
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Typography variant="h1" marginBottom={2}>
                로그인
            </Typography>
            <Button
                text="Sign in with Google"
                size="medium"
                onClick={handleOnSubmit}
            />
        </Modal>
    );
}
