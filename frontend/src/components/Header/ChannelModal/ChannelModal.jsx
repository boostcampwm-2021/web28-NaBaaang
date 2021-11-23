import React from 'react';

import ChannelCreateValidation from '@/validation/ChannelModal';
import useForm from '@/hooks/useForm';

import { Modal } from '@/components/Common';
import ChannelModalForm from '../ChannelModalForm';

export default function ChannelModal({
    onClose,
    open,
    successText,
    initFormData,
    handleOnSubmit,
}) {
    const { errors, formData, handleChange, handleSubmit } = useForm({
        initState: initFormData || {
            title: '',
            category: '',
            description: '',
        },
        onSubmit: handleOnSubmit,
        validate: ChannelCreateValidation,
    });

    return (
        <Modal
            open={open}
            successText={successText}
            closeText="취소"
            onSuccess={handleSubmit}
            onClose={onClose}
        >
            <ChannelModalForm
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
            />
        </Modal>
    );
}
