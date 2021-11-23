import React from 'react';

import { Modal, Typography } from '@/components/Common';

function LoginAlertModal({ onSuccess }) {
    return (
        <Modal open successText="확인" onSuccess={onSuccess}>
            <Typography variant="p">로그인을 해주세요.</Typography>
        </Modal>
    );
}

export default LoginAlertModal;
