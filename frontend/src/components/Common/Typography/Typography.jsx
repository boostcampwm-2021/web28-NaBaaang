import React from 'react';
import styled, { css } from 'styled-components';

export default function Typography({ children, ...styleProps }) {
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

const FONT_SIZE_TYPE = {
    h1: css`
        font-size: 2rem;
    `,
    h2: css`
        font-size: 1.8rem;
    `,
    h3: css`
        font-size: 1.6rem;
    `,
    h4: css`
        font-size: 1.4rem;
    `,
    h5: css`
        font-size: 1.2rem;
    `,
    p: css`
        font-size: 1rem;
    `,
    span: css`
        font-size: 1rem;
    `,
};

const FONT_WEIGHT_TYPE = {
    light: css`
        font-family: 'Noto Sans Kr Light';
    `,
    medium: css`
        font-family: 'Noto Sans Kr Medium';
    `,
    Bold: css`
        font-family: 'Noto Sans Kr Bold';
    `,
};

const generatorTag = variant => styled(variant)`
    ${({ variant = 'p' }) => FONT_SIZE_TYPE[variant]};
    ${({ weight = 'medium' }) => FONT_WEIGHT_TYPE[weight]};

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
