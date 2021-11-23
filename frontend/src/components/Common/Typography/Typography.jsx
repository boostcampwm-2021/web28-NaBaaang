import React from 'react';
import styled, { css } from 'styled-components';

import { fontMixin } from '@/styles/mixins';

export default function Typography(props) {
    const { children, ...styleProps } = props;

    switch (styleProps.variant) {
        case 'h1':
            return <H1Tag {...styleProps}>{children}</H1Tag>;
        case 'h2':
            return <H2Tag {...styleProps}>{children}</H2Tag>;
        case 'h3':
            return <H3Tag {...styleProps}>{children}</H3Tag>;
        case 'h4':
            return <H4Tag {...styleProps}>{children}</H4Tag>;
        case 'h5':
            return <H5Tag {...styleProps}>{children}</H5Tag>;
        case 'span':
            return <SpanTag {...styleProps}>{children}</SpanTag>;
        case 'p':
            return <PTag {...styleProps}>{children}</PTag>;
        default:
            return <PTag {...styleProps}>{children}</PTag>;
    }
}

const FontSizeType = {
    h1: css`
        ${fontMixin('2rem', '1em', 'notoSansMedium')};
    `,
    h2: css`
        ${fontMixin('1.8rem', '1em', 'notoSansMedium')};
    `,
    h3: css`
        ${fontMixin('1.6rem', '1em', 'notoSansMedium')};
    `,
    h4: css`
        ${fontMixin('1.4rem', '1em', 'notoSansMedium')};
    `,
    h5: css`
        ${fontMixin('1.2rem', '1em', 'notoSansMedium')};
    `,
    p: css`
        ${fontMixin('1rem', '1em', 'notoSansMedium')};
    `,
    span: css`
        ${fontMixin('1rem', '1em', 'notoSansMedium')};
    `,
};

const generatorTag = variant => styled(variant)`
    ${({ variant = 'p' }) => FontSizeType[variant]};
    color: ${({ color = 'black' }) => color};
    text-align: ${({ align = 'center' }) => align};
    background-color: ${({ backgroundColor = 'transparent' }) =>
        backgroundColor};

    margin-top: ${({ marginTop = 0 }) => `${marginTop}rem`};
    margin-left: ${({ marginLeft = 0 }) => `${marginLeft}rem`};
    margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}rem`};
    margin-right: ${({ marginRight = 0 }) => `${marginRight}rem`};
`;

const H1Tag = generatorTag('h1');
const H2Tag = generatorTag('h2');
const H3Tag = generatorTag('h3');
const H4Tag = generatorTag('h4');
const H5Tag = generatorTag('h5');
const PTag = generatorTag('p');
const SpanTag = generatorTag('span');
