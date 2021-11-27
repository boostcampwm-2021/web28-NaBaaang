import React from 'react';
import HLSVideo from '@/components/HLS/HLSVideo';
import { Box, Button } from '@/components/Common';

export default function DashBoardVideo({
    streamKey,
    isLive,
    handleStartLive,
    handleEndLive,
}) {
    return (
        <Box flex={1} flexDirection="column" alignItems="stretch">
            <Box flex={9}>
                <HLSVideo streamKey={streamKey} />
            </Box>
            <Box flex={1}>
                {!isLive && (
                    <Button
                        onClick={handleStartLive}
                        text="방송 시작"
                        color="success"
                    />
                )}
                <Button
                    onClick={handleEndLive}
                    text="방송 종료"
                    color="error"
                    marginLeft={1}
                />
            </Box>
        </Box>
    );
}
