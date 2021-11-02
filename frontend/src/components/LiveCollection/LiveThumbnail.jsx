import React from 'react';
import styled from 'styled-components';

const ThumbnailBlock = styled.div`
    position: relative;
    width: 100%;
    height: 10em;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 15px;

    img {
        position: absolute;
        width: 100%;
        height: 10em;
        object-fit: cover;
    }
`;

const LiveBadge = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    border-radius: 0.25em;
    padding: 0.25em;
`;

const ViewerBadge = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #626161;
    border-radius: 0.25em;
    padding: 0.25em;
`;

const BadgeText = styled.span`
    color: white;
    font-size: 16px;
`;

const LiveThumbnail = ({ thumbnail, viewer }) => {
    return (
        <ThumbnailBlock>
            <img src={thumbnail} alt="" />
            <LiveBadge>
                <BadgeText>live</BadgeText>
            </LiveBadge>
            <ViewerBadge>
                <BadgeText>{viewer} watching</BadgeText>
            </ViewerBadge>
        </ThumbnailBlock>
    );
};

export default LiveThumbnail;
