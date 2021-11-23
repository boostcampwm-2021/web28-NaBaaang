import React, { createContext } from 'react';
import useModal from '@/hooks/useModal';

import { Modal } from '@/components/Common';

export const ModalContext = createContext();

export default function ModalStore({ children }) {
    const modalValue = useModal();

    return (
        <ModalContext.Provider value={modalValue}>
            <Modal />
            {children}
        </ModalContext.Provider>
    );
}
