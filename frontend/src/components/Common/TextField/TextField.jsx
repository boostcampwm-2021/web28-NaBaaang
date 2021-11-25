import React from 'react';
import styled, { css } from 'styled-components';

import { Box, Typography } from '@/components/Common';

export default function TextField({
    labelText,
    name,
    inputRef,
    handleChange,
    value,
}) {
    return (
        <Box width="80%" flexDirection="row" justifyContent="space-around">
            <Typography variant="p">{labelText}</Typography>
            <InputBox>
                <Input
                    ref={inputRef}
                    name={name}
                    onChange={handleChange}
                    value={value}
                />
            </InputBox>
        </Box>
    );
}

const InputBox = styled.div`
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray2};
        `}
    border-radius: 40px;
    padding: 0.5rem;
`;

const Input = styled.input`
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray2};
        `}
    border: none;
    caret-color: white;
    :focus {
        outline: none;
    }
`;
