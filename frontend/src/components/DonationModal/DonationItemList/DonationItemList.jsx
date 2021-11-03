import React from 'react';
import styled from 'styled-components';
import DonationItem from './DonationItem';
import { flexMixin } from '@/styles/mixins';
import { DONATION_ITEM_LIST } from '@/constants/donation';

export default function DonationItemList() {
    return (
        <ListWrap>
            {DONATION_ITEM_LIST.map(({ src, value }) => (
                <DonationItem key={value} imgSrc={src} value={value} />
            ))}
        </ListWrap>
    );
}

const ListWrap = styled.div`
    ${flexMixin('row', 'space-between', 'center')};
    }
`;
