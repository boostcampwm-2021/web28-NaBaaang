import React from 'react';

import { Avatar, Box, Typography } from '@/components/Common';

export default function LiveDetail({ details }) {
    const { streamer, title } = details;
    const { imageUrl, nickname } = streamer;

    return (
        <Box justifyContent="flex-start">
            <Box marginRight={1}>
                <Avatar size="small" src={imageUrl} />
            </Box>
            <Box flexDirection="column" alignItems="flex-start">
                <Typography varaint="h5">{nickname}</Typography>
                <Typography varaint="h6">{title}</Typography>
            </Box>
        </Box>
    );
}
