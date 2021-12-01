import React, { useContext } from 'react';

import validateChannelFrom from '@/validation/ChannelModal';
import useForm from '@/hooks/useForm';

import { ModalContext } from '@/store/ModalStore';
import { Box } from '@/components/Common';
import ChannelForm from './ChannelForm';

export default function Channel({
    subHandleOnSubmit,
    initFormData,
    successText,
}) {
    const { closeModal } = useContext(ModalContext);

    const handleOnSubmit = async formData => {
        try {
            subHandleOnSubmit(formData);
            closeModal();
        } catch (err) {
            throw new Error(err);
        }
    };

    const { errors, handleChange, handleSubmit, handleInputChange, formData } =
        useForm({
            initState: initFormData || {
                title: '',
                description: '',
                category: '',
            },
            onSubmit: handleOnSubmit,
            validate: validateChannelFrom,
        });

    return (
        <Box width="100%" height="auto">
            <ChannelForm
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                initFormData={formData}
                successText={successText}
            />
        </Box>
    );
}
