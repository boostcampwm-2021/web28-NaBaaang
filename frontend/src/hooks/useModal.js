import { useState } from 'react';

export default () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleModal = (content = false) => {
        setIsModalOpen(!isModalOpen);
        if (content) {
            setModalContent(content);
        }
    };

    const closeModal = (content = false) => {
        setIsModalOpen(false);
        setModalContent(content);
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
};
