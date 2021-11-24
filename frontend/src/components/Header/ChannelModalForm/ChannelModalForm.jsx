import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { flexMixin, sizeMixin } from '@/styles/mixins';

import TextField from '@/components/Common/TextField';
import Box from '@/components/Common/Box';
import Button from '@/components/Common/Button/Button';
import SelectionBox from '@/components/Common/SelectionBox';
import { CATEGORY } from '@/constants/category';

export default function ChannelModalForm({
    handleSubmit,
    handleChange,
    handleInputChange,
    errors,
}) {
    const [selectedItem, setSelectedItems] = useState(-1);

    useEffect(() => {
        if (selectedItem !== -1) {
            handleChange('category', CATEGORY[selectedItem]);
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
                    />
                    {errors.title && <ErrorText>{errors.title}</ErrorText>}
                </Box>
                <Box width="100%" flex={1}>
                    <Field>카테고리</Field>

                    <SelectionBox
                        width="80%"
                        items={CATEGORY}
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
                    />
                    {errors.description && (
                        <ErrorText>{errors.description}</ErrorText>
                    )}
                </Box>
            </Box>

            <Button text="방송 시작" color="success" onClick={handleSubmit} />
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
