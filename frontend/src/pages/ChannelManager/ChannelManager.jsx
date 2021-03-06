import React from 'react';

import Box from '@/components/Common/Box';
import Header from '@/components/Header';

import DashBoard from '@/components/DashBoard';

export default function ChannelManager({ role }) {
    return (
        <Box flexDirection="column" width="100%" height="100%">
            <Box flex={1} width="100%">
                <Header />
            </Box>
            <Box flex={20} width="100%">
                <DashBoard role={role} />
            </Box>
        </Box>
    );
}
