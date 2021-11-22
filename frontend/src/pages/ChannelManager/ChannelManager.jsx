import React from 'react';

import Box from '@/components/Common/Box';
import Header from '@/components/Header';

import DashBoard from '@/components/DashBoard';

export default function ChannelManager() {
    return (
        <Box flexDirection="column" width="100%" height="100%">
            <Box flex={1} width="100%">
                <Header />
            </Box>
            <Box flex={20} witdh="100%">
                <DashBoard />
            </Box>
        </Box>
    );
}
