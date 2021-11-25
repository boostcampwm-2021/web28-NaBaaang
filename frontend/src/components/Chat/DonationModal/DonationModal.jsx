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
        if (totalDonation > 0) {
            handleTotalDonationInit();
            onDonation(totalDonation);
        }
    };

    return (
        <Box flexDirection="column">
            <Typography variant="h3" marginBottom={2}>
                비트를 선택해주세요
            </Typography>

            <Box marginBottom={2}>
                <DonationItemList handleTotalDonation={handleTotalDonation} />
            </Box>

            <Box marginBottom={1}>
                <Typography variant="h5">
                    총 도네이션 : {totalDonation}
                </Typography>
            </Box>

            <Box>
                <Button
                    onClick={handleTotalDonationInit}
                    text="초기화"
                    color="error"
                    size="small"
                    marginRight={1}
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
