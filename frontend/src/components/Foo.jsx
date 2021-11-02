import React from 'react';
import styled, { css } from 'styled-components';

const StyledFoo = styled.div`
    font-family: 'notoSansLight';
    ${({ theme }) =>
        css`
            background-color: ${theme.color.primary};
        `}
`;

export default function foo({ title }) {
    return <StyledFoo>{title}</StyledFoo>;
}
