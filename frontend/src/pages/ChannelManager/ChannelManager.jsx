import React from 'react';
import styled, { css } from 'styled-components';

import fetchAction from '@/constants/fetchAction';
import useFetch from '@/hooks/useFetch';

import Box from '@/components/Common/Box';
import Video from '@/components/Video';

export default function ChannelManager({ match }) {
    const { params } = match;
    const { channelId } = params;
    const { url, option } = fetchAction({
        type: 'FETCH_GET_CHANNEL',
        payload: channelId,
    });

    const { data, loading, error } = useFetch(url, option);

    if (error) return <div>Error..</div>;
    if (loading) return <div>loading..</div>;
    if (!data) return <div>null data...</div>;

    const { title, description, category } = data;
    const streamKey = data.stream_key;
    return (
        <Box height="100%" flexDirection="row">
            <Box
                height="100%"
                flexDirection="column"
                justifyContent="space-around"
                flex="1"
            >
                <Box flexDirection="column">
                    <div>채널 정보</div>
                    <ChannelTitle>{title}</ChannelTitle>
                    <ChannelDescription>{description}</ChannelDescription>
                    <Box>{category}</Box>
                </Box>
                <Box flexDirection="column">
                    미디어 서버 정보
                    <div>URL: </div>
                    <div>스트림 키 : {streamKey}</div>
                </Box>
            </Box>
            <Box height="100%" flexDirection="column" flex="2">
                <Box flex="1">방송 메타 정보</Box>
                <Box width="100%" height="100%" flex="2">
                    {streamKey ? (
                        <Video streamKey={streamKey} />
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
