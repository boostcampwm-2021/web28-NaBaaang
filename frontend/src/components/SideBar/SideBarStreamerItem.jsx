import React from 'react';
import styled from 'styled-components';

export default function SideBarStreamerItem({ streamer }) {
    return (
        <AvatarListItem key={streamer.id}>
            <AvatarBox>
                <Avatar alt="empty" src={streamer.imageSrc} />
            </AvatarBox>
        </AvatarListItem>
    );
}

const AvatarListItem = styled.li`
    margin: 10px 0;
`;

const AvatarBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 70%;
    overflow: hidden;
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
`;
