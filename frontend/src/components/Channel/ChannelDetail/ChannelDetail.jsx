import React from 'react';
import styled from 'styled-components';

import { Box, Avatar, Typography, Chip } from '@/components/Common';

export default function ChannelDetails({ channelInfo }) {
    const {
        streamer: { imageUrl, nickname },
        title,
        category,
    } = channelInfo;

    return (
        <StyledBox>
            <Box marginRight={1}>
                <Avatar src={imageUrl} size="medium" />
            </Box>

            <Box alignItems="flex-start" flexDirection="column">
                <Typography variant="h5">{nickname}</Typography>
                <Typography variant="h6" marginBottom={0.5}>
                    {title}
                </Typography>
                <Chip text={`#${category}`} color="success" />
            </Box>

            <Box marginLeft="auto" alignSelf="flex-start">
                {/* <Typography variant="span">시청자수: {userCnt}</Typography> */}
            </Box>
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    width: 100%;
    background-color: ${({ theme }) => theme.color.gray3};
    justify-content: flex-start;
    padding: 1rem;
`;
