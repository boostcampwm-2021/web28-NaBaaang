import React from 'react';
import styled from 'styled-components';
import { sizeMixin } from '@/styles/mixins';
import { Typography, Box } from '@/components/Common';

export default function DonationItem({
    ImageComponent,
    value,
    handleTotalDonation,
}) {
    const handleItemClick = () => {
        handleTotalDonation(value);
    };

    return (
        <BoxWrap
            onClick={handleItemClick}
            flexDirection="column"
            marginRight={1}
        >
            {ImageComponent}
            <Typography variant="span">{value}</Typography>
        </BoxWrap>
    );
}

const BoxWrap = styled(Box)`
    transition: transform ease-in 100ms;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    svg {
        ${sizeMixin('40px', '40px')}
    }
`;
