import React from 'react';
import styled from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';

export default function DonationItem({ ImageComponent, value }) {
    return (
        <ItemWrap>
            {ImageComponent}
            <ItemTitle>{value}</ItemTitle>
        </ItemWrap>
    );
}

const ItemWrap = styled.div`
    ${flexMixin('column', 'center', 'center')};
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    svg {
        ${sizeMixin('50px', '50px')}
    }
`;

const ItemTitle = styled.h3`
    font-size: 16px;
`;
