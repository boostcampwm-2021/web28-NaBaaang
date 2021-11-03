import React from 'react';
import styled from 'styled-components';
import { sizeMixin, borderBoxMixin } from '@/styles/mixins';

export default function Card({ width, height, children }) {
    return (
        <StyledCard width={width} height={height}>
            {children}
        </StyledCard>
    );
}

const StyledCard = styled.div`
    ${({ width, height }) => sizeMixin(width, height)}
    ${borderBoxMixin('1px', '10px')}
    background-color: ${({ theme }) => theme.color.white};
`;
