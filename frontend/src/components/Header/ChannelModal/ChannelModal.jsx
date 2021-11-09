import React from 'react';
import { useHistory } from 'react-router';

import ChannelCreateValidation from '@/validation/ChannelModal';
import { fetchCreateChannel } from '@/apis/channel';
import useForm from '@/hooks/useForm';

import Modal from '@/components/Common/Modal';
import ChannelModalForm from '../ChannelModalForm/ChannelModalForm';

export default function ChannelCreateModal({ onClose, open }) {
    const history = useHistory();

    const handleOnSubmit = async formData => {
        try {
            const channelID = await fetchCreateChannel(formData);
            history.push(`/u/1/stream-manager/${channelID})`);
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
            showButton
            onSuccessText="방송 생성"
            onSuccess={handleSubmit}
            onCancleText="취소"
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
