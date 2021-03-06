import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { flexMixin, sizeMixin } from '@/styles/mixins';

import thumbnailImage from '@/assets/images/channel-thumbnail.jpg';
import LiveThumbnail from './LiveThumbnail';
import LiveDetail from './LiveDetail';

function LiveCard({ content }) {
    const { id } = content;
    return (
        <Link to={`/channel/${id}`}>
            <CardLayout>
                <LiveThumbnail
                    thumbnail={thumbnailImage}
                    viewer={1000}
                />
                <LiveDetail details={content} />
            </CardLayout>
        </Link>
    );
}

const CardLayout = styled.article`
    flex: 0 0 18.5em;
    margin-right: 1em;
    ${flexMixin('column', 'center')}
    ${sizeMixin('18.5em', '100%')}
`;

export default LiveCard;
