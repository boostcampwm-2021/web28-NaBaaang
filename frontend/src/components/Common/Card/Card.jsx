import React from 'react';
import styled from 'styled-components';
import { sizeMixin, borderBoxMixin, flexMixin } from '@/styles/mixins';

export default function Card({
    width,
    height,
    children,
    direction,
    jutify,
    alignItems,
}) {
    return (
        <StyledCard
            width={width}
            height={height}
            direction={direction}
            jutify={jutify}
            alignItems={alignItems}
        >
            {children}
        </StyledCard>
    );
}

const StyledCard = styled.div`
    ${({ direction, jutify, alignItems }) =>
        flexMixin(direction, jutify, alignItems)}
    ${({ width, height }) => sizeMixin(width, height)}
    ${borderBoxMixin('1px', '10px')}
    background-color: ${({ theme }) => theme.color.white};
    padding: 20px;
    box-sizing: border-box;
`;
