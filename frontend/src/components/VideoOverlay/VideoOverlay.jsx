import React from 'react';
import styled from 'styled-components';

import Box from '@/components/Common/Box';
import Overlay from '@/components/Common/Overlay';
import Typography from '@/components/Common/Typography';

export default function VideoOverlay({ open }) {
    if (!open) return null;

    return (
        <Box width="100%" height="100%">
            <Overlay />
            <ContentBox flexDirection="column">
                <Typography variant="h2" color="#fff">
                    화면 준비 중...
                </Typography>
            </ContentBox>
        </Box>
    );
}

const ContentBox = styled(Box)`
    z-index: 1;
`;
