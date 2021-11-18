import React from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '@/components/Common/Modal/Modal';

function AlertModal() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate(`/`);
    };
    return (
        <Modal
            open
            showButton
            alert
            onSuccessText="확인"
            onSuccess={handleSubmit}
        >
            <p>방송을 종료합니다</p>
        </Modal>
    );
}

export default AlertModal;
