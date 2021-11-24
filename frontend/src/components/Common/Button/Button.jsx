import React from 'react';
import styled from 'styled-components';
import { BUTTON_SIZE_TYPE, BUTTON_COLOR_TYPE } from '@/constants/css';

export default function Button({
    onClick,
    text,
    color = 'light',
    size = 'small',
}) {
    return (
        <StyledButton onClick={onClick} color={color} size={size}>
            {text}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    width: auto;
    ${({ size }) => BUTTON_SIZE_TYPE[size]};
    ${({ color }) => BUTTON_COLOR_TYPE[color]};
    border-radius: 5px;
    box-sizing: content-box;
`;
