import React from 'react';

import Box from '@/components/Common/Box';
import DashBoardCard from '../DashBoardCard';

export default function DashBoardInfo({ info }) {
    const streamKey = info.stream_key;

    return (
        <Box
            height="100%"
            type="black"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
            flex={1}
        >
            <DashBoardCard title="방송 정보 편집" info={info} />
            <DashBoardCard title="송출 정보 확인" streamKey={streamKey} />
            <DashBoardCard title="OBS 가이드" />
        </Box>
    );
}
