import React from 'react';
import styled, { css } from 'styled-components';

function LiveThumbnail({ thumbnail, viewer }) {
    return (
        <ThumbnailBlock>
            <img src={thumbnail} alt="" />
            <LiveBadge>
                <BadgeText>LIVE</BadgeText>
            </LiveBadge>
            <ViewerBadge>
                <BadgeText>{viewer} watching</BadgeText>
            </ViewerBadge>
        </ThumbnailBlock>
    );
}

const ThumbnailBlock = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 16px;

    img {
        position: absolute;
        width: 100%;
        height: 10em;
        object-fit: cover;
    }
`;

const Badge = css`
    position: absolute;
    left: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25em;
    padding: 0 0.25em;
`;

const LiveBadge = styled.div`
    ${Badge}
    top: 10px;
    background-color: ${({ theme }) => theme.color.red};
`;

const ViewerBadge = styled.div`
    ${Badge}
    bottom: 10px;
    background-color: ${({ theme }) => theme.color.gray1};
`;

const BadgeText = styled.span`
    color: ${({ theme }) => theme.color.offwhite};
    font-size: 14px;
`;

export default LiveThumbnail;
