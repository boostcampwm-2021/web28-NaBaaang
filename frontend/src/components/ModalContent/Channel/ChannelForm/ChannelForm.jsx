import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { flexMixin, sizeMixin } from '@/styles/mixins';

import {
    TextField,
    Box,
    Button,
    SelectionBox,
    Typography,
} from '@/components/Common';
import { CHANNEL_CATEGORY } from '@/constants/channelCategory';

export default function ChannelForm({
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
                    {errors.title && (
                        <ErrorText>
                            <Typography color="red" variant="span">
                                {errors.title}
                            </Typography>
                        </ErrorText>
                    )}
                </Box>
                <Box
                    width="80%"
                    flexDirection="row"
                    justifyContent="space-around"
                >
                    <Typography variant="span">카테고리</Typography>
                    <SelectionBox
                        width="50%"
                        items={CHANNEL_CATEGORY}
                        selectedItem={selectedItem}
                        setSelectedItems={setSelectedItems}
                    />
                    {errors.category && (
                        <ErrorText>
                            <Typography color="red" variant="span">
                                {errors.category}
                            </Typography>
                        </ErrorText>
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
                        <ErrorText>
                            <Typography color="red" variant="span">
                                {errors.description}
                            </Typography>
                        </ErrorText>
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
const ErrorText = styled.div`
    position: absolute;
    top: 70%;
    color: ${({ theme }) => theme.color.red};
`;
