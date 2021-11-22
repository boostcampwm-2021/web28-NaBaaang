import React from 'react';

import { MEDIA_URL } from '@/constants/url';

import Modal from '@/components/Common/Modal';
import Box from '@/components/Common/Box';

import Typography from '@/components/Common/Typography/Typography';

export default function MediaInfoModal({ onClose, open, streamKey }) {
    return (
        <Modal
            width="600px"
            height="400px"
            open={open}
            showButton={false}
            onCancleText="닫기"
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
