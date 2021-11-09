import React from 'react';

import styled from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';
import ChannelCreateValidation from '@/validation/ChannelModal';

import { fetchCreateChannel } from '@/apis/channel';
import Modal from '@/components/Common/Modal';
import TextField from '@/components/Common/TextField';
import Box from '@/components/Common/Box';
import useForm from '@/hooks/useForm';

export default function ChannelCreateModal({ onClose, open }) {
    const handleOnSubmit = async formData => {
        const channelID = await fetchCreateChannel(formData);
        console.log(channelID);
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

    const modalContents = (
        <Form onSubmit={handleSubmit}>
            <Box width="100%" flex={1}>
                <TextField
                    labelText="제목"
                    name="title"
                    handleChange={handleChange}
                />
                {errors.title && <ErrorText>{errors.title}</ErrorText>}
            </Box>
            <Box width="100%" flex={1}>
                <TextField
                    labelText="카테고리"
                    name="category"
                    handleChange={handleChange}
                />
                {errors.category && <ErrorText>{errors.category}</ErrorText>}
            </Box>
            <Box width="100%" flex={1}>
                <TextField
                    labelText="설명"
                    name="description"
                    handleChange={handleChange}
                />
                {errors.description && (
                    <ErrorText>{errors.description}</ErrorText>
                )}
            </Box>
        </Form>
    );

    return (
        <Modal
            open={open}
            showButton
            onSuccessText="방송 생성"
            onSuccess={handleSubmit}
            onCancleText="취소"
            onClose={onClose}
        >
            {modalContents}
        </Modal>
    );
}

const Form = styled.form`
    ${flexMixin('column', 'space-around', 'center')}
    ${sizeMixin('100%', '100%')}
`;

const ErrorText = styled.div`
    position: absolute;
    top: 80%;
    color: ${({ theme }) => theme.color.red};
`;
