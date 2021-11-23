import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ModalContext } from '@/store/ModalStore';
import { Box, Typography, Button } from '@/components/Common';

function AlertModal() {
    const { closeModal } = useContext(ModalContext);

    const navigate = useNavigate();
    const handleSuccessButtonClick = () => {
        closeModal();
        navigate(`/`);
    };
    return (
        <Box flexDirection="column">
            <Typography varaint="p" marginBottom={2}>방송이 종료되었습니다.</Typography>
            <Button
                text="확인"
                color="success"
                onClick={handleSuccessButtonClick}
            />
        </Box>
    );
}

export default AlertModal;
