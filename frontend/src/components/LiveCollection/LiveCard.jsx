import React from 'react';
import styled from 'styled-components';
import LiveThumbnail from './LiveThumbnail';
import LiveDetails from './LiveDetails';

const CardLayout = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 18.5em;
    margin-right: 1em;
`;

const LiveCard = ({ content }) => {
    return (
        <CardLayout>
            <LiveThumbnail thumbnail={content.thumbnail_url} viewer={content.viewer_cnt} />
            <LiveDetails details={content} />
        </CardLayout>
    );
};

export default LiveCard;
