import { useState } from 'react';

export default () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(false);

    const handleModal = (content = false) => {
        console.log('handleModal');
        setIsModalOpen(!isModalOpen);
        if (content) {
            setModalContent(content);
        }
    };

    const closeModal = (content = false) => {
        console.log('closeModal');
        setIsModalOpen(false);
        setModalContent(content);
    };

    const openModal = (content = false) => {
        console.log('openModal');

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
