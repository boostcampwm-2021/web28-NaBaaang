import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { flexMixin, sizeMixin } from '@/styles/mixins';

function LiveThumbnail({ thumbnail, viewer }) {
    return (
        <Link to="/channel">
            <ThumbnailBlock>
                <img src={thumbnail} alt="" />
                <LiveBadge>
                    <BadgeText>LIVE</BadgeText>
                </LiveBadge>
                <ViewerBadge>
                    <BadgeText>{viewer} watching</BadgeText>
                </ViewerBadge>
            </ThumbnailBlock>
        </Link>
    );
}

const ThumbnailBlock = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 16px;
    ${sizeMixin('100%', '150px')}

    img {
        position: absolute;
        object-fit: cover;
        ${sizeMixin('100%', '10em')}
    }
`;

const Badge = css`
    position: absolute;
    left: 10px;
    border-radius: 0.25em;
    padding: 0 0.25em;
    ${flexMixin('inline-flex', 'center', 'center')}
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
