import React from 'react';
import styled from 'styled-components';

export default function SideBarStreamerItem({ streamer }) {
    return (
        <AvatarListItem key={streamer.id} data-streamer-id={streamer.id}>
            <AvatarBox>
                <Avatar alt="empty" src={streamer.imageSrc} />
            </AvatarBox>
        </AvatarListItem>
    );
}

const AvatarListItem = styled.li`
    margin: 10px 0;
    cursor: pointer;
`;

const AvatarBox = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 70%;
    overflow: hidden;
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
`;
