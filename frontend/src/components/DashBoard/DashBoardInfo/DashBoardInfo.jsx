import React from 'react';
import styled from 'styled-components';

import Box from '@/components/Common/Box';
import Card from '@/components/Common/Card';
import Typography from '@/components/Common/Typography';
import Chip from '@/components/Common/Chip';

export default function DashBoardInfo({ info }) {
    const { title, description, category } = info;
    const streamKey = info.stream_key;

    return (
        <Box
            height="100%"
            type="black"
            flexDirection="column"
            alignItems="space-between"
            flex={1}
        >
            <Box flex={1}>
                <Typography variant="h5" color="white">
                    {title}
                </Typography>
            </Box>
            <Box flex={4}>
                <StyledCard width="70%" height="70%">
                    <Typography variant="h5" color="black" align="center">
                        {description}
                    </Typography>
                </StyledCard>
            </Box>
            <Box flex={1} alignSelf="flex-end">
                <Chip text={`#${category}`} color="success" />
            </Box>

            <Box
                flex={2}
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="stretch"
            >
                <Box flex={1} backgroundColor="gray1">
                    <Typography variant="h3" color="white" align="center">
                        미디어 서버 정보
                    </Typography>
                </Box>

                <Box flex={2}>
                    <Typography variant="h6" color="white" align="center">
                        스트림키 : {streamKey}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

const StyledCard = styled(Card)`
    color: black !important;
`;
