import React from 'react';
import styled from 'styled-components';
import { flexMixin, sizeMixin } from '@/styles/mixins';

import LiveThumbnail from './LiveThumbnail';
import LiveDetails from './LiveDetails';

function LiveCard({ content }) {
    return (
        <CardLayout>
            <LiveThumbnail
                thumbnail={content.thumbnail_url}
                viewer={content.viewer_cnt}
            />
            <LiveDetails details={content} />
        </CardLayout>
    );
}

const CardLayout = styled.article`
    flex: 0 0 18.5em;
    margin-right: 1em;
    ${flexMixin('column', 'center')}
    ${sizeMixin('18.5em', '100%')}
`;

export default LiveCard;
