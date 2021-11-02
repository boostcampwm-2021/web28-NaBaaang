import React from 'react';
import styled, { css } from 'styled-components';
import LiveCollection from '@/components/LiveCollection';

const StyledFoo = styled.div`
    ${({ theme }) =>
        css`
            background-color: ${theme.color.gray1};
        `}
`;

export default function foo({ title }) {
    return (
        <>
            <StyledFoo>{title}</StyledFoo>
            <LiveCollection />
        </>    
    );
}
