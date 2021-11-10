import React from 'react';
import Video from '@/components/Video';
import Box from '@/components/Common/Box';
import Button from '@/components/Common/Button';

export default function DashBoardVideo({ streamKey }) {
    return (
        <Box flex={1} flexDirection="column" alignItems="stretch">
            <Box flex={9}>
                <Video streamKey={streamKey} />;
            </Box>
            <Box flex={1}>
                <Button text="방송 시작" color="success" />
            </Box>
        </Box>
    );
}
