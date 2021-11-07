import React from 'react';
import styled from 'styled-components';

import Box from '@/components/Common/Box';
import Avatar from '@/components/Common/Avatar';

export default function SideBarStreamerItem({ id, imageSrc }) {
    return (
        <AvatarBox key={id} data-streamer-id={id}>
            <Avatar
                alt="empty"
                src={imageSrc}
                size="small"
            />
        </AvatarBox>
    );
}

const AvatarBox = styled(Box)`
    cursor: pointer;
    margin-bottom: 10px;
`;
