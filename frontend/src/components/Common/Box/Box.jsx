import React from 'react';
import styled, { css } from 'styled-components';
import { flexMixin } from '@/styles/mixins';

export default function Box(props) {
    const { children } = props;
    return <StyledBox {...props}>{children}</StyledBox>;
}

const generateCss = (k, v) =>
    v &&
    css`
        ${k}: ${v};
    `;

const StyledBox = styled.div`
    position: relative;
    ${({ width }) => generateCss('width', width)}
    ${({ height }) => generateCss('height', height)}


    ${({ border }) =>
        border &&
        css`
            border: ${border}px solid black;
        `}
    ${({ flex }) =>
        css`
            flex: ${flex} ${flex};
        `}
    ${({ alignSelf }) => css`
        align-self: ${alignSelf};
    `}
    ${({ flexDirection, justifyContent = 'center', alignItems = 'center' }) =>
        flexMixin(flexDirection, justifyContent, alignItems)}
`;
