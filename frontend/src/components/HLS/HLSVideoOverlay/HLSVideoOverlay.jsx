import React from 'react';
import styled from 'styled-components';

import { Box, Overlay, Typography } from '@/components/Common';

export default function HLSVideoOverlay({ open }) {
    if (!open) return null;

    return (
        <Box width="100%" height="100%">
            <Overlay />
            <ContentBox flexDirection="column">
                <Typography variant="h2" color="white">
                    화면 준비 중...
                </Typography>
            </ContentBox>
        </Box>
    );
}

const ContentBox = styled(Box)`
    z-index: 1;
`;
