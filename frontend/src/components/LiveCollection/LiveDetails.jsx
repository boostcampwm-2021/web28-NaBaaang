import React from 'react';
import styled from 'styled-components';
import { flexMixin, fontMixin } from '@/styles/mixins';

function LiveDetails({ details }) {
    return (
        <DetailsLayout>
            <StreamerIcon>
                <img src={details.streamer.imageUrl} alt="" />
            </StreamerIcon>
            <LiveContent>
                <LiveTitle>{details.title}</LiveTitle>
                <LiveStreamer>{details.streamer.nickname}</LiveStreamer>
            </LiveContent>
        </DetailsLayout>
    );
}

const DetailsLayout = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const StreamerIcon = styled.div`
    order: 1;
    flex: 0 0 50px;
    margin-right: 1em;

    img {
        object-fit: cover;
        border-radius: 30px;
    }
`;

const LiveContent = styled.div`
    order: 2;
    flex: 1 1 100%;
    ${flexMixin('column', 'center', 'flex-start')}
`;

const LiveTitle = styled.span`
    padding-bottom: 0.5em;
    ${fontMixin('16px', '1em', 'notoSansMedium')}
`;

const LiveStreamer = styled.span`
    ${fontMixin('14px', '1em', 'notoSansLight')}
`;

export default LiveDetails;
