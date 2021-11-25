import React from 'react';
import { BIT_TYPE } from '@/constants/messageType';
import { Box } from '@/components/Common';
import DonationItem from '../DonationItem';

export default function DonationItemList({ handleTotalDonation }) {
    return (
        <Box>
            {Object.values(BIT_TYPE).map(({ image, value }) => (
                <DonationItem
                    key={value}
                    value={value}
                    ImageComponent={image}
                    handleTotalDonation={handleTotalDonation}
                />
            ))}
        </Box>
    );
}
