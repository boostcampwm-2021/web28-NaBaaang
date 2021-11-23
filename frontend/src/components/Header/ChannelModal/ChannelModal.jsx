import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ChannelCreateValidation from '@/validation/ChannelModal';
import useForm from '@/hooks/useForm';

import { ModalContext } from '@/store/ModalStore';
import { Box } from '@/components/Common';
import { fetchCreateChannel } from '@/apis/channel';
import ChannelModalForm from '../ChannelModalForm';

export default function ChannelCreateModal() {
    const navigate = useNavigate();
    const { closeModal } = useContext(ModalContext);

    const handleOnSubmit = async formData => {
        try {
            const channelID = await fetchCreateChannel(formData);
            closeModal();
            navigate(`/stream-manager/${channelID}`);
        } catch (err) {
            throw new Error(err);
        }
    };

    const { errors, handleChange, handleSubmit } = useForm({
        initState: {
            title: '',
            category: '',
            description: '',
        },
        onSubmit: handleOnSubmit,
        validate: ChannelCreateValidation,
    });

    return (
        <Box width="100%" height="auto">
            <ChannelModalForm
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </Box>
    );
}
