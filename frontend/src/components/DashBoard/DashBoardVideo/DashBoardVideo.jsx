import React from 'react';
import Video from '@/components/Video';
import Box from '@/components/Common/Box';
import Button from '@/components/Common/Button';

export default function DashBoardVideo({
    streamKey,
    isLive,
    handleStartLive,
    handlePauseLive,
    handleEndLive,
}) {
    return (
        <Box flex={1} flexDirection="column" alignItems="stretch">
            <Box flex={9}>
                <Video streamKey={streamKey} />
            </Box>
            <Box flex={1}>
                {isLive ? (
                    <Button
                        onClick={handlePauseLive}
                        text="방송 중지"
                        color="light"
                    />
                ) : (
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
