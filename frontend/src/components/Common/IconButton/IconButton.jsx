import React from 'react';
import styled from 'styled-components';

import {
    BORDER_RADIUS_TYPE,
    ICON_BUTTON_SIZE_TYPE,
    ICON_BUTTON_COLOR_TYPE,
} from '@/constants/css';

export default function IconButton({ onClick, children, ...styleProps }) {
    return (
        <StyledButton onClick={onClick} {...styleProps}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    min-width: 1rem;
    width: auto;
    ${({ size = 'small' }) => ICON_BUTTON_SIZE_TYPE[size]}
    ${({ color = 'light' }) => ICON_BUTTON_COLOR_TYPE[color]}
    ${({ type = 'circle' }) => BORDER_RADIUS_TYPE[type]}
    color: ${({ iconColor = 'white' }) => iconColor};
    box-sizing: content-box;
    transition: background-color ease-in 100ms;

    svg,
    img {
        width: 100%;
        height: 100%;
    }
`;
