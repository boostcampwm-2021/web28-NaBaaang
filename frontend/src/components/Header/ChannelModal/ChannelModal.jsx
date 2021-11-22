import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChannelCreateValidation from '@/validation/ChannelModal';
import { fetchCreateChannel } from '@/apis/channel';
import useForm from '@/hooks/useForm';

import {Modal} from '@/components/Common';
import ChannelModalForm from '../ChannelModalForm/ChannelModalForm';

export default function ChannelCreateModal({ onClose, open }) {
    const navigate = useNavigate();

    const handleOnSubmit = async formData => {
        try {
            const channelID = await fetchCreateChannel(formData);
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
        <Modal
            open={open}
            successText="방송 생성"
            closeText="취소"
            onSuccess={handleSubmit}
            onClose={onClose}
        >
            <ChannelModalForm
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </Modal>
    );
}
