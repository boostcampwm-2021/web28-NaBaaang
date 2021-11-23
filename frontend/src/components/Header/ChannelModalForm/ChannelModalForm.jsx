import React from 'react';
import styled from 'styled-components';

import { flexMixin, sizeMixin } from '@/styles/mixins';

import TextField from '@/components/Common/TextField';
import Box from '@/components/Common/Box';

export default function ChannelModalForm({
    handleSubmit,
    handleChange,
    errors,
    formData,
}) {
    return (
        <Form onSubmit={handleSubmit}>
            <Box width="100%" flex={1}>
                <TextField
                    labelText="제목"
                    name="title"
                    handleChange={handleChange}
                    value={formData ? formData.title : ''}
                />
                {errors.title && <ErrorText>{errors.title}</ErrorText>}
            </Box>
            <Box width="100%" flex={1}>
                <TextField
                    labelText="카테고리"
                    name="category"
                    handleChange={handleChange}
                    value={formData ? formData.category : ''}
                />
                {errors.category && <ErrorText>{errors.category}</ErrorText>}
            </Box>
            <Box width="100%" flex={1}>
                <TextField
                    labelText="설명"
                    name="description"
                    handleChange={handleChange}
                    value={formData ? formData.description : ''}
                />
                {errors.description && (
                    <ErrorText>{errors.description}</ErrorText>
                )}
            </Box>
        </Form>
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
