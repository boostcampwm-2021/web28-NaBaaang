import React from 'react';
import styled, { css } from 'styled-components';
import { colorMixin } from '@/styles/mixins';

export default function Button({ text, color, size = 'small' }) {
    return (
        <StyledButton color={color} size={size}>
            {text}
        </StyledButton>
    );
}

const ERROR_COLOR_CSS = css`
    ${({ theme }) => colorMixin(theme.color.white, theme.color.red)}
`;

const SUCCESS_COLOR_CSS = css`
    ${({ theme }) => colorMixin(theme.color.white, theme.color.primary)}
`;

const SIZE_ENUM = {
    small: css`
        padding: 10px 15px;
        font-size: 16px;
    `,
    medium: css`
        padding: 12px 20px;
        font-size: 20px;
    `,
    large: css`
        padding: 14px 25px;
        font-size: 24px;
    `,
};

const BUTTON_CSS_ENUM = {
    error: ERROR_COLOR_CSS,
    success: SUCCESS_COLOR_CSS,
};

const StyledButton = styled.button`
    width: auto;
    ${({ size }) => SIZE_ENUM[size]}
    ${({ color }) => BUTTON_CSS_ENUM[color]}
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: content-box;
`;
