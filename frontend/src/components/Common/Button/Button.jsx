import React from 'react';
import styled, { css } from 'styled-components';

import { colorMixin, fontMixin } from '@/styles/mixins';

export default function Button({ onClick, text, color, size = 'small' }) {
    return (
        <StyledButton onClick={onClick} color={color} size={size}>
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
        ${fontMixin('16px', '1em', 'notoSansMedium')};
    `,
    medium: css`
        padding: 12px 20px;
        ${fontMixin('20px', '1em', 'notoSansMedium')};
    `,
    large: css`
        padding: 14px 25px;
        ${fontMixin('24px', '1em', 'notoSansMedium')};
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
