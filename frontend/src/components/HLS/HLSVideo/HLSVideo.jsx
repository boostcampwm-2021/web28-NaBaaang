import React, { useRef } from 'react';
import styled from 'styled-components';
import HLS from 'hls.js/dist/hls';

import { sizeMixin } from '@/styles/mixins';

import Box from '@/components/Common/Box';
import HLSVideoOverlay from '@/components/HLS/HLSVideoOverlay';
import useHLSPolling from '@/components/HLS/hooks/useHLSPolling';

export default function HLSVideo({ streamKey }) {
    const videoRef = useRef();
    const { loading } = useHLSPolling(streamKey, videoRef, 3000);

    return HLS.isSupported() ? (
        <Box width="100%" height="100%">
            {loading && <HLSVideoOverlay open={loading} />}
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
