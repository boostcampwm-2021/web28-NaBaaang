import React, { useContext } from 'react';

import { v1 } from 'uuid';
import { ROLE } from '@/constants/role';
import { UserContext } from '@/store/UserStore';
import { ModalContext } from '@/store/ModalStore';

import {
    LoginAlertModalContent,
    DonationModalContent,
} from '@/components/ModalContent';

export default function useChatForm({ role, ref, handleSubmit }) {
    const {
        userInfo: { user },
    } = useContext(UserContext);
    const { openModal } = useContext(ModalContext);
    const messageInputRef = ref;

    const roleCheck = () => {
        if (role === ROLE.ALL) return true;
        openModal(<LoginAlertModalContent />);
        return false;
    };

    const createMessage = ({ type, content }) => {
        return {
            id: v1(),
            type,
            userId: user.id,
            nickname: user.nickname,
            content,
        };
    };

    const sendTextMessage = e => {
        e.preventDefault();
        const content = messageInputRef.current.value;
        if (content === '') return;
        if (roleCheck()) {
            const message = createMessage({ type: 'NORMAL', content });
            handleSubmit(message);
            messageInputRef.current.value = '';
        }
    };

    const sendDonationMessage = value => {
        if (roleCheck()) {
            handleSubmit(createMessage({ type: 'DONATION', content: value }));
        }
    };

    const openDonationModal = () => {
        if (roleCheck()) {
            openModal(
                <DonationModalContent onDonation={sendDonationMessage} />,
            );
        }
    };

    return { sendTextMessage, openDonationModal };
}
