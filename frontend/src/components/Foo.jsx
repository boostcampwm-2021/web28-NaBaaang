import React from 'react';
import styled, { css } from 'styled-components';
import LiveCollections from '@/components/LiveCollections';

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
            <LiveCollections />
        </>    
    );
}
