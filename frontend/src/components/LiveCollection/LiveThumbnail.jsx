import React from 'react';
import styled from 'styled-components';
import { sizeMixin } from '@/styles/mixins';

function LiveThumbnail({ thumbnail }) {
    return (
        <ThumbnailBlock>
            <img src={thumbnail} alt="thumbnail" />
        </ThumbnailBlock>
    );
}

const ThumbnailBlock = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 16px;
    ${sizeMixin('100%', '150px')}

    img {
        width: 100%;
        height: 100%;
    }
`;

export default LiveThumbnail;
