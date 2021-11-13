import React from 'react';
import { useHistory } from 'react-router';

import Modal from '@/components/Common/Modal/Modal';

function AlertModal() {
    const history = useHistory();
    const handleSubmit = () => {
        history.push(`/`);
    };
    return (
        <Modal open showButton alert onSuccessText="확인" onSuccess={handleSubmit}>
            <p>방송을 종료합니다</p>
        </Modal>
    );
}

export default AlertModal;
