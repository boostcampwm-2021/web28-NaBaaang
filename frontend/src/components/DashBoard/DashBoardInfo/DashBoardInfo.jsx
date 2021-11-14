import React, { useState } from 'react';

import Box from '@/components/Common/Box';
import DashBoardCard from '../DashBoardCard';
import MediaInfoModal from '../MediaInfoModal';

export default function DashBoardInfo({ info }) {
    const streamKey = info.stream_key;
    const [medialModalOpen, setMedialModalOpen] = useState(false);

    const handleMedialModalOpen = () => {
        setMedialModalOpen(true);
    };

    const handleMedialModalClose = () => {
        setMedialModalOpen(false);
    };
    return (
        <Box
            height="100%"
            type="black"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
            flex={1}
        >
            <MediaInfoModal
                open={medialModalOpen}
                streamKey={streamKey}
                onClose={handleMedialModalClose}
            />

            <DashBoardCard title="방송 정보 편집" info={info} />
            <DashBoardCard
                onClick={handleMedialModalOpen}
                title="송출 정보 확인"
            />
            <DashBoardCard title="OBS 가이드" />
        </Box>
    );
}
