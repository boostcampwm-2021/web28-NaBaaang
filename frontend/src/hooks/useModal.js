import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState(null);

    const navigate = useNavigate();

    const handleModal = (content = false) => {
        setIsModalOpen(!isModalOpen);
        if (content) {
            setModalContent(content);
        }
    };

    const closeModal = (content = false) => {
        setIsModalOpen(false);
        setModalContent(content);
        if (redirectUrl) {
            navigate(redirectUrl);
            setRedirectUrl(null);
        }
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
        setRedirectUrl,
        closeModal,
        openModal,
    };
}
