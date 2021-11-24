import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { flexMixin, sizeMixin } from '@/styles/mixins';

import TextField from '@/components/Common/TextField';
import Box from '@/components/Common/Box';
import Button from '@/components/Common/Button/Button';
import SelectionBox from '@/components/Common/SelectionBox';
import { CHANNEL_CATEGORY } from '@/constants/channelCategory';

export default function ChannelModalForm({
    handleSubmit,
    handleChange,
    handleInputChange,
    initFormData,
    successText,
    errors,
}) {
    const { title, description, category } = initFormData || {
        title: '',
        description: '',
        category: '',
    };
    const [selectedItem, setSelectedItems] = useState(
        CHANNEL_CATEGORY.indexOf(category),
    );
    useEffect(() => {
        if (selectedItem !== -1) {
            handleChange('category', CHANNEL_CATEGORY[selectedItem]);
        }
    }, [selectedItem]);

    return (
        <Form onSubmit={handleSubmit}>
            <Box width="100%" height="100%" flexDirection="column">
                <Box width="100%" flex={1}>
                    <TextField
                        labelText="제목"
                        name="title"
                        handleChange={handleInputChange}
                        value={title}
                    />
                    {errors.title && <ErrorText>{errors.title}</ErrorText>}
                </Box>
                <Box width="100%" flex={1}>
                    <Field>카테고리</Field>

                    <SelectionBox
                        width="80%"
                        items={CHANNEL_CATEGORY}
                        selectedItem={selectedItem}
                        setSelectedItems={setSelectedItems}
                    />
                    {errors.category && (
                        <ErrorText>{errors.category}</ErrorText>
                    )}
                </Box>
                <Box width="100%" flex={1}>
                    <TextField
                        labelText="설명"
                        name="description"
                        handleChange={handleInputChange}
                        value={description}
                    />
                    {errors.description && (
                        <ErrorText>{errors.description}</ErrorText>
                    )}
                </Box>
            </Box>

            <Button text={successText} color="success" onClick={handleSubmit} />
        </Form>
    );
}

const Form = styled.form`
    ${flexMixin('column', 'space-around', 'center')}
    ${sizeMixin('100%', '100%')}
`;
const Field = styled.span`
    width: 100%;
`;
const ErrorText = styled.div`
    position: absolute;
    top: 80%;
    color: ${({ theme }) => theme.color.red};
`;
