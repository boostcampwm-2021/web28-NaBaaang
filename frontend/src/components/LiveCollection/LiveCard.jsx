import React from 'react';
import styled from 'styled-components';

import LiveThumbnail from './LiveThumbnail';
// import LiveDetails from './LiveDetails';

function LiveCard({ content }) {
    return (
        <CardLayout>
            <LiveThumbnail
                thumbnail={content.thumbnail_url}
                viewer={content.viewer_cnt}
            />
            {/* <LiveDetails details={content} /> */}
        </CardLayout>
    );
}

const CardLayout = styled.article`
    font-family: 'notoSansMedium';
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 18.5em;
    margin-right: 1em;
`;

export default LiveCard;
