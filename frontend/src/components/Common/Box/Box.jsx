import React from 'react';
import styled, { css } from 'styled-components';
import { flexMixin } from '@/styles/mixins';

export default function Box(props) {
    const { children } = props;
    return <StyledBox {...props}>{children}</StyledBox>;
}

const generateCss = (cssLine, v) =>
    v &&
    css`
        ${cssLine}
    `;

const BoxColotType = {
    black: css`
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.black};
    `,
};

const StyledBox = styled.div`
    position: relative;
    ${({ width }) => generateCss(`width : ${width};`, width)}
    ${({ height }) => generateCss(`height: ${height};`, height)}
    ${({ border }) => generateCss(`border: ${border}px solid black;`, border)}
    ${({ flex }) => generateCss(`flex: ${flex} ${flex} 0;`, flex)}
    ${({ alignSelf }) => generateCss(`align-self: ${alignSelf};`, alignSelf)}
    ${({ theme, backgroundColor }) =>
        generateCss(
            `background-color: ${theme.color[backgroundColor]};`,
            backgroundColor,
        )}

    ${({ type }) => BoxColotType[type]};

    ${({ theme, fontColor }) =>
        generateCss(`background-color: ${theme.color[fontColor]};`, fontColor)}

    ${({ flexDirection, justifyContent = 'center', alignItems = 'center' }) =>
        flexMixin(flexDirection, justifyContent, alignItems)}
`;
