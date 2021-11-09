import React from 'react';
import styled from 'styled-components';

export default function Typography(props) {
    const StyledText = generateDynamicallyStyledTag(props);
    const { children } = props;
    return <StyledText>{children}</StyledText>;
}

const VariantType = {
    h1: styled.h1`
        font-size: 2rem;
    `,
    h2: styled.h2`
        font-size: 1.8rem;
    `,
    h3: styled.h3`
        font-size: 1.6rem;
    `,
    h4: styled.h4`
        font-size: 1.4rem;
    `,
    h5: styled.h5`
        font-size: 1.2rem;
    `,
    h6: styled.h6`
        font-size: 1rem;
    `,
    p: styled.p`
        font-size: 1rem;
    `,
    span: styled.span`
        font-size: 1rem;
    `,
};

function generateDynamicallyStyledTag({ variant = 'h6', align }) {
    return styled(VariantType[variant])`
        text-align: ${align};
    `;
}
