import React from 'react';
import styled from 'styled-components';

import { BORDER_RADIUS_TYPE, BUTTON_SIZE_TYPE } from '@/constants/css';

export default function IconButton({
    onClick,
    type = 'circle',
    size = 'small',
    children,
}) {
    return (
        <StyledButton onClick={onClick} type={type} size={size}>
            {children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    width: auto;
    ${({ size }) => BUTTON_SIZE_TYPE[size]}
    ${({ type }) => BORDER_RADIUS_TYPE[type]}
    background-color: ${({ theme }) => theme.color.black};
    box-sizing: content-box;
    transition: background-color ease-in 200ms;

    svg,
    img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        background-color: ${({ theme }) => theme.color.primary};
    }
`;
