import React from 'react';

import styled from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';
import ChannelCreateValidation from '@/validation/ChannelModal';

import Modal from '@/components/Common/Modal';
import TextField from '@/components/Common/TextField';
import useForm from '@/hooks/useForm';

export default function ChannelCreateModal() {
    const handleOnSubmit = data => {
        console.log(data);
    };

    const { handleChange, handleSubmit } = useForm({
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
            <InputRow>
                <TextField
                    labelText="제목"
                    name="title"
                    handleChange={handleChange}
                />
            </InputRow>
            <InputRow>
                <TextField
                    labelText="카테고리"
                    name="category"
                    handleChange={handleChange}
                />
            </InputRow>
            <InputRow>
                <TextField
                    labelText="설명"
                    name="description"
                    handleChange={handleChange}
                />
            </InputRow>
        </Form>
    );

    return (
        <Modal
            open
            showButton
            onSuccessText="방송 생성"
            onSuccess={handleSubmit}
            onCancleText="취소"
        >
            {modalContents}
        </Modal>
    );
}

const Form = styled.form`
    ${flexMixin('column', 'space-around', 'center')}
    ${sizeMixin('100%', '100%')}
`;

const InputRow = styled.div`
    ${flexMixin('row', 'space-between', 'center')}
    margin: 16px 0;
`;