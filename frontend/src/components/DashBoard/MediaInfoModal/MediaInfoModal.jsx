import React from 'react';

import { MEDIA_URL } from '@/constants/url';

import { Modal, Box, Typography } from '@/components/Common';

export default function MediaInfoModal({ onClose, open, streamKey }) {
    return (
        <Modal
            width="600px"
            height="400px"
            open={open}
            closeText="닫기"
            onClose={onClose}
            justifyContent="flex-start"
        >
            <Box flexDirection="column" alignItems="flex-start">
                <Typography variant="h5" color="black">
                    stream-key : {streamKey}
                </Typography>

                <Typography variant="h5" color="black">
                    media-url : {MEDIA_URL}
                </Typography>
            </Box>
        </Modal>
    );
}
