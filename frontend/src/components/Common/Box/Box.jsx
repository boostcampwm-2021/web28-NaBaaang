import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { flexMixin } from '@/styles/mixins';
import { isString } from '@/util';

export default forwardRef((props, ref) => {
    const { children } = props;
    return (
        <StyledBox ref={ref} {...props}>
            {children}
        </StyledBox>
    );
});

const generateCss = (cssLine, v) =>
    v &&
    css`
        ${cssLine}
    `;

const transMarginProp = v => {
    return !isString(v) ? `${v}rem` : v;
};

const BoxColorType = {
    black: css`
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.black2};
    `,
};

const StyledBox = styled.div`
    position: relative;
    ${({ width }) => generateCss(`width : ${width};`, width)}
    ${({ height }) => generateCss(`height: ${height};`, height)}
    ${({ border }) => generateCss(`border: ${border}px solid black;`, border)}
    ${({ flex }) => generateCss(`flex: ${flex} ${flex} 0;`, flex)}
    ${({ alignSelf }) => generateCss(`align-self: ${alignSelf};`, alignSelf)}
    ${({ padding }) => generateCss(`padding: ${padding}rem;`, padding)}
    ${({ theme, backgroundColor }) =>
        generateCss(
            `background-color: ${theme.color[backgroundColor]};`,
            backgroundColor,
        )}

    ${({ type }) => BoxColorType[type]};

    ${({ theme, fontColor }) =>
        generateCss(`background-color: ${theme.color[fontColor]};`, fontColor)}

    ${({ flexDirection, justifyContent = 'center', alignItems = 'center' }) =>
        flexMixin(flexDirection, justifyContent, alignItems)};

    margin-top: ${({ marginTop = 0 }) => transMarginProp(marginTop)};
    margin-left: ${({ marginLeft = 0 }) => transMarginProp(marginLeft)};
    margin-bottom: ${({ marginBottom = 0 }) => transMarginProp(marginBottom)};
    margin-right: ${({ marginRight = 0 }) => transMarginProp(marginRight)};
`;
