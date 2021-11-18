import React from 'react';

import Avatar from '@/components/Common/Avatar';
import Box from '@/components/Common/Box';
import Typography from '@/components/Common/Typography';

function LiveDetails({ details }) {
    return (
        <Box justifyContent="flex-start">
            <Avatar size="medium" src={details.streamer.imageUrl} />
            <Box flexDirection="column" alignItems="flex-start">
                <Typography varaint="span">{details.title}</Typography>
                <Typography varaint="span">
                    {details.streamer.nickname}
                </Typography>
            </Box>
        </Box>
    );
}

export default LiveDetails;
