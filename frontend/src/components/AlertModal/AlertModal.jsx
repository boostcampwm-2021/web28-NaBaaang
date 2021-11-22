import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal, Typography } from '@/components/Common';

function AlertModal() {
    const navigate = useNavigate();
    const handleSuccessButtonClick = () => {
        navigate(`/`);
    };
    return (
        <Modal open successText="확인" onSuccess={handleSuccessButtonClick}>
            <Typography varaint="p">방송을 종료합니다</Typography>
        </Modal>
    );
}

export default AlertModal;
