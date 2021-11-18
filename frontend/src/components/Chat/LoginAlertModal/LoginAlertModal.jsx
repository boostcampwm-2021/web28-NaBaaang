import React from 'react';

import Modal from '@/components/Common/Modal/Modal';

function LoginAlertModal({ onSuccess }) {
    return (
        <Modal open showButton alert onSuccessText="확인" onSuccess={onSuccess}>
            <p>로그인을 해주세요.</p>
        </Modal>
    );
}

export default LoginAlertModal;
