import React from 'react';
import styled, { css } from 'styled-components';

import { colorMixin, fontMixin } from '@/styles/mixins';

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

const BUTTON_SIZE_TYPE = {
    extra_small: css`
        padding: 10px;
        ${fontMixin('12px', '0.5em', 'notoSansMedium')};
    `,
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

const BUTTON_COLOR_TYPE = {
    error: css`
        ${({ theme: { color } }) => colorMixin(color.white, color.red)}
    `,
    success: css`
        ${({ theme: { color } }) => colorMixin(color.white, color.primary)}
    `,
    light: css`
        ${({ theme: { color } }) => colorMixin(color.black, color.gray3)}
    `,
};

const StyledButton = styled.button`
    width: auto;
    ${({ size }) => BUTTON_SIZE_TYPE[size]};
    ${({ color }) => BUTTON_COLOR_TYPE[color]};
    border-radius: 5px;
    box-sizing: content-box;
`;
