import React from 'react';
import styled from 'styled-components';
import { flexMixin } from '@/styles/mixins';
import { BIT_TYPE } from '@/constants/messageType';
import DonationItem from './DonationItem';

export default function DonationItemList({ handleTotalDonation }) {
    return (
        <ListWrap>
            {Object.values(BIT_TYPE).map(({ image, value }) => (
                <DonationItem
                    key={value}
                    value={value}
                    ImageComponent={image}
                    handleTotalDonation={handleTotalDonation}
                />
            ))}
        </ListWrap>
    );
}

const ListWrap = styled.div`
    ${flexMixin('row', 'space-between', 'center')};
    }
`;
