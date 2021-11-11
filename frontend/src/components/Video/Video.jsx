import React, { useRef } from 'react';
import styled from 'styled-components';
import HLS from 'hls.js/dist/hls';

import { sizeMixin } from '@/styles/mixins';
import fetchAction from '@/constants/fetchAction';

import Box from '@/components/Common/Box';
import VideoOverlay from '@/components/VideoOverlay';
import usePolling from './usePolling';

export default function Video({ streamKey }) {
    const videoRef = useRef();
    const { url, option } = fetchAction({
        type: 'FETCH_READY_MEDIA',
        payload: streamKey,
    });
    const { loading } = usePolling(url, option, videoRef, 3000);

    return HLS.isSupported() ? (
        <Box width="100%" height="100%">
            {loading && <VideoOverlay open={loading} />}
            <StyledVideo controls autoplay muted ref={videoRef} />
        </Box>
    ) : (
        <div>스트리밍을 지원하지 않습니다.</div>
    );
}

const StyledVideo = styled.video`
    ${sizeMixin('100%', '100%')};
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;
