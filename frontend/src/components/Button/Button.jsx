import React from 'react';
import styled, { css } from 'styled-components';
import { sizeMixin, colorMixin } from '@/styles/mixins';

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
        ${sizeMixin('100px', '35px')}
        font-size: 16px;
    `,
    medium: css`
        ${sizeMixin('130px', '40px')};
        font-size: 20px;
    `,
    large: css`
        ${sizeMixin('150px', '45px')}
        font-size: 24px;
    `,
};

const BUTTON_CSS_ENUM = {
    error: ERROR_COLOR_CSS,
    success: SUCCESS_COLOR_CSS,
};

const StyledButton = styled.button`
    ${({ size }) => SIZE_ENUM[size]}
    ${({ color }) => BUTTON_CSS_ENUM[color]}
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
