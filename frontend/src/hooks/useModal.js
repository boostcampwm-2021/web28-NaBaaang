import { useState } from 'react';

export default function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(false);

    const handleModal = (content = false) => {
        setIsModalOpen(!isModalOpen);
        if (content) {
            setModalContent(content);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(false);
    };

    const openModal = (content = false) => {
        setIsModalOpen(true);
        if (content) {
            setModalContent(content);
        }
    };

    return {
        isModalOpen,
        modalContent,
        handleModal,
        closeModal,
        openModal,
    };
}
