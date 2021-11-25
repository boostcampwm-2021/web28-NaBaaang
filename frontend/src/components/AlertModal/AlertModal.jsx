import React, { useContext, useEffect } from 'react';

import { ModalContext } from '@/store/ModalStore';
import { Box, Typography, Button } from '@/components/Common';

function AlertModal() {
    const { closeModal, setRedirectUrl } = useContext(ModalContext);

    useEffect(() => {
        setRedirectUrl('/');
    }, []);

    const handleSuccessButtonClick = () => {
        closeModal();
    };
    return (
        <Box flexDirection="column">
            <Typography varaint="p" marginBottom={2}>
                방송이 종료되었습니다.
            </Typography>
            <Button
                text="확인"
                color="success"
                onClick={handleSuccessButtonClick}
            />
        </Box>
    );
}

export default AlertModal;
