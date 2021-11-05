import React from 'react';
import styled, { css } from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';

export default function Box(props) {
    const { children } = props;
    return <StyledBox {...props}>{children}</StyledBox>;
}

const StyledBox = styled.div`
    ${({ width, height }) => sizeMixin(width, height)};
    ${({ flex }) =>
        css`
            flex: ${flex} ${flex};
        `}
    ${({ alignSelf }) => css`
        align-self: ${alignSelf};
    `}
    ${({ flexDirection, justifyContent = 'center', alignItems = 'center' }) =>
        flexMixin(flexDirection, justifyContent, alignItems)}
    ${({ isBolder = true }) =>
        isBolder &&
        css`
            border: 1px solid black;
            border-radius: 10px;
        `}
`;
