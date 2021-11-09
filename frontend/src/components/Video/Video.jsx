import React, { useEffect, useRef } from 'react';

import Hls from 'hls.js/dist/hls';

import styled from 'styled-components';
import { sizeMixin } from '@/styles/mixins';

export default function Video({ videoSrc }) {
    const videoRef = useRef();

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            // bind them together
            hls.attachMedia(videoRef.current);
            // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                console.log('video and hls.js are now bound together !');
                hls.loadSource('http://localhost:5959/images/output.m3u8');
                hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                    console.log(
                        `manifest loaded, found ${data.levels.length} quality level`,
                    );
                });
            });
        }
    }, []);

    return Hls.isSupported() ? (
        <StyledVideo controls autoplay ref={videoRef}>
            <source src={videoSrc} />
        </StyledVideo>
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
