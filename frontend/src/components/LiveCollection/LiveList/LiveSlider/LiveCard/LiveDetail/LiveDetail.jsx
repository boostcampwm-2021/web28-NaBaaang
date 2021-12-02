import React from 'react';

import { Avatar, Box, Typography } from '@/components/Common';

export default function LiveDetail({ details }) {
    const { streamer, title } = details;
    const { imageUrl, nickname } = streamer;

    return (
        <Box justifyContent="flex-start">
            <Box marginRight={1}>
                <Avatar size="small" src={imageUrl} alt="streamer-thumbnail" />
            </Box>
            <Box flexDirection="column" alignItems="flex-start">
                <Typography varaint="h5">{title}</Typography>
                <Typography varaint="h5">{nickname}</Typography>
            </Box>
        </Box>
    );
}
