import React from 'react';
import styled from 'styled-components';
import { sizeMixin, borderBoxMixin, flexMixin } from '@/styles/mixins';

export default function Card({
    width,
    height,
    children,
    jutify = 'center',
    alignItems = 'center',
}) {
    return (
        <StyledCard
            width={width}
            height={height}
            jutify={jutify}
            alignItems={alignItems}
        >
            {children}
        </StyledCard>
    );
}

const StyledCard = styled.div`
    ${({ jutify, alignItems }) => flexMixin('column', jutify, alignItems)}
    ${({ width, height }) => sizeMixin(width, height)}
    ${borderBoxMixin('1px', '10px')}
    background-color: ${({ theme }) => theme.color.white};
    padding: 20px;
    box-sizing: border-box;
`;
