import React from 'react';
import styled from 'styled-components';

const DetailsLayout = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const StreamerIcon = styled.div`
    order: 1;
    flex: 0 0 50px;
    margin-right: 10px;

    img {
        object-fit: cover;
        border-radius: 30px;
    }
`;

const LiveContent = styled.div`
    display: flex;
    flex-direction: column;
    order: 2;
    flex: 1 1 100%;
    justify-content: center;
`;

const LiveTitle = styled.span`
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 5px;
`;

const LiveStreamer = styled.span`
    font-weight: normal;
    font-size: 14px;
`;

const LiveDetails = ({ details }) => {
    return (
        <DetailsLayout>
            <StreamerIcon>
                <img src={details.streamer_url} alt="" />
            </StreamerIcon>
            <LiveContent>
                <LiveTitle>{details.title}</LiveTitle>
                <LiveStreamer>{details.nickname}</LiveStreamer>
            </LiveContent>
        </DetailsLayout>
    );
};

export default LiveDetails;
