import React from 'react';
import styled, { css } from 'styled-components';
import LiveLists from '@components/LiveLists';

const StyledFoo = styled.div`
    font-family: 'notoSansLight';
    ${({ theme }) =>
        css`
            background-color: ${theme.color.primary};
        `}
`;

export default function foo({ title }) {
    return (
        <>
            <StyledFoo>{title}</StyledFoo>
            <LiveLists />
        </>    
    );
}
