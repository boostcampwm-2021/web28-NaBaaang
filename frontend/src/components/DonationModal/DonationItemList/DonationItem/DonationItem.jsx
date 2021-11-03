import React from 'react';
import styled from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';

export default function DonationItem({ imgSrc, value }) {
    return (
        <ItemWrap>
            <ItemImage src={imgSrc} />
            <ItemTitle>{value}</ItemTitle>
        </ItemWrap>
    );
}

const ItemWrap = styled.div`
    ${flexMixin('column', 'center', 'center')};
    transition: all ease-in-out 0.1s;
    &:hover {
        transform: scale(1.1);
    }
`;

const ItemImage = styled.img`
    ${sizeMixin('48px', '48px')}
`;

const ItemTitle = styled.h3`
    font-size: 16px;
`;
