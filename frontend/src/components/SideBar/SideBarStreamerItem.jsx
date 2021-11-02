import React from 'react';
import { ListItemAvatar, Avatar } from '@mui/material';

export default function SideBarStreamerItem({ imageSrc }) {
    return <ListItemAvatar><Avatar src={imageSrc} /></ListItemAvatar>;
}
