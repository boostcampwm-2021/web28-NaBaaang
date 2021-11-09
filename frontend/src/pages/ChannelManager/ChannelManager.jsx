import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import Box from '@/components/Common/Box';
import Video from '@/components/Video';

export default function ChannelManager({ channelId }) {
    const url = '미디어 서버 주소'; // .env에 있는 주소

    const [channelInfo, setChannelInfo] = useState({});

    useEffect(async () => {
        const url = `백엔드 서버 주소/channel/${channelId}`;
        let data = await fetch(url);
        data = await data.json();

        const newChannelInfo = {
            title: data.title,
            description: data.description,
            category: data.category,
            key: data.streamKey,
        };

        setChannelInfo({ ...channelInfo, ...newChannelInfo });
    }, []);

    return (
        <Box height="100%" flexDirection="row">
            <Box
                height="100%"
                flexDirection="column"
                justifyContent="space-around"
                flex="1"
            >
                <Box>
                    <div>채널 정보</div>
                    <ChannelTitle>{channelInfo.title}</ChannelTitle>
                    <ChannelDescription>
                        {channelInfo.description}
                    </ChannelDescription>
                    <Box>{channelInfo.category}</Box>
                </Box>
                <Box flexDirection="column">
                    미디어 서버 정보
                    <div>URL: {url}</div>
                    <div>스트림 키 : {channelInfo.key}</div>
                </Box>
            </Box>
            <Box height="100%" flexDirection="column" flex="2">
                <Box flex="1">방송 메타 정보</Box>
                <Box width="100%" height="100%" flex="2">
                    {channelInfo.key ? (
                        <Video secretKey={channelInfo.key} />
                    ) : (
                        <Box width="100%" height="100%">
                            방송 준비중
                        </Box>
                    )}
                </Box>
                <Box flex="1">방송 시작 버튼</Box>
            </Box>
        </Box>
    );
}

const ChannelTitle = styled.h3``;

const ChannelDescription = styled.div`
    ${({ theme }) => css`
        background: ${theme.color.gray2};
    `}
`;
