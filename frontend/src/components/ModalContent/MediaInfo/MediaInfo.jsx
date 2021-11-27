import React from 'react';

import { MEDIA_UPLOAD_URL } from '@/constants/url';

import { Box, Typography } from '@/components/Common';

export default function MediaInfo({ streamKey }) {
    return (
        <Box flexDirection="column" alignItems="flex-start">
            <Typography variant="h5" color="black">
                stream-key : {streamKey}
            </Typography>

            <Typography variant="h5" color="black">
                media-url : {MEDIA_UPLOAD_URL}
            </Typography>
        </Box>
    );
}
