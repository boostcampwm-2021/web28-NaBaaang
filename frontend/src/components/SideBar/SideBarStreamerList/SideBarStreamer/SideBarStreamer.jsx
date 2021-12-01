import React from 'react';
import styled from 'styled-components';

import { Avatar, Box } from '@/components/Common';

export default function SideBarStreamer({ id, imageSrc }) {
    return (
        <AvatarBox key={id} data-streamer-id={id}>
            <Avatar alt="empty" src={imageSrc} size="small" />
        </AvatarBox>
    );
}

const AvatarBox = styled(Box)`
    cursor: pointer;
    margin-bottom: 10px;
`;
