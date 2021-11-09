import React from 'react';
import styled, { css } from 'styled-components';

export default function Typography({
    variant = 'h6',
    color,
    align = 'left',
    children = '',
}) {
    const styleProps = { variant, color, align };
    switch (variant) {
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
        case 'h6':
            return <H6Tag {...styleProps}>{children}</H6Tag>;
        case 'span':
            return <SpanTag {...styleProps}>{children}</SpanTag>;
        case 'p':
            return <PTag {...styleProps}>{children}</PTag>;
        default:
            return null;
    }
}

const FontSizeType = {
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
    h6: css`
        font-size: 1rem;
    `,
    p: css`
        font-size: 1rem;
    `,
    span: css`
        font-size: 1rem;
    `,
};

const generatorTag = variant => styled(variant)`
    ${({ variant }) => FontSizeType[variant]};
    color: ${({ color }) => color};
    text-align: ${({ align }) => align};
`;

const H1Tag = generatorTag('h1');
const H2Tag = generatorTag('h2');
const H3Tag = generatorTag('h3');
const H4Tag = generatorTag('h4');
const H5Tag = generatorTag('h5');
const H6Tag = generatorTag('h6');
const SpanTag = generatorTag('span');
const PTag = generatorTag('p');
