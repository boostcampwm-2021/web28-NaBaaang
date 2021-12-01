import React, { useContext } from 'react';
import { Button } from '@/components/Common';
import { ModalContext } from '@/store/ModalStore';

import { LoginModalContent } from '@/components/ModalContent';

export default function SignInMenu() {
    const { openModal } = useContext(ModalContext);
    return (
        <Button
            text="로그인"
            size="medium"
            onClick={() => openModal(<LoginModalContent />)}
        />
    );
}
