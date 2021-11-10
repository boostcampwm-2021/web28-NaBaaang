import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { flexMixin, sizeMixin } from '@/styles/mixins';

import LiveThumbnail from './LiveThumbnail';
import LiveDetails from './LiveDetails';

function LiveCard({ content }) {
    const { id } = content;
    return (
        <Link to={`/channel/${id}`}>
            <CardLayout>
                <LiveThumbnail
                    thumbnail="https://static-cdn.jtvnw.net/previews-ttv/live_user_qldhkwy-440x248.jpg"
                    viewer={1000}
                />
                <LiveDetails details={content} />
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
