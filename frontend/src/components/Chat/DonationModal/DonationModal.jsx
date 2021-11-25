import React, { useState } from 'react';

import { Box, Button, Typography } from '@/components/Common';
import DonationItemList from './DonationItemList';

export default function DonationModal({ onDonation }) {
    const [totalDonation, setTotalDonation] = useState(0);

    const handleTotalDonation = value => {
        setTotalDonation(totalDonation + value);
    };

    const handleTotalDonationInit = () => {
        setTotalDonation(0);
    };

    const handleClickSubmit = () => {
        onDonation(totalDonation);
    };

    return (
        <Box flexDirection="column">
            <Typography variant="h3">비트를 선택해주세요</Typography>
            <Box padding={1}>
                <DonationItemList handleTotalDonation={handleTotalDonation} />
            </Box>
            <Box marginBottom={1}>
                <Typography variant="h5">누적 값 : {totalDonation}</Typography>
            </Box>
            <Box width="100%" flexDirection="row" justifyContent="space-around">
                <Button
                    onClick={handleTotalDonationInit}
                    text="초기화"
                    color="error"
                />
                <Button
                    onClick={handleClickSubmit}
                    text="보내기"
                    color="success"
                />
            </Box>
        </Box>
    );
}
