import React, { useState, useEffect } from 'react';
import SideBarStreamerItem from 'SideBarStreamerItem';

import { List, ListItem } from '@mui/material';

import image1 from '../../assets/images/kukucorn.jpg';

export default function SideBarStreamerList() {
    const [streamerList, setStreamerList] = useState([]);

    useEffect(() => {
        const newStreamerList = [
            { imageSrc: image1, key: 1 },
            { imageSrc: image1, key: 2 },
            { imageSrc: image1, key: 3 },
            { imageSrc: image1, key: 4 },
            { imageSrc: image1, key: 5 },
        ];
        setStreamerList([...streamerList, ...newStreamerList]);
    }, []);

    const avatarList = () => {
        return streamerList.map(streamer => {
            return (
                <ListItem key={streamer.key}>
                    {SideBarStreamerItem({ imageSrc: streamer.imageSrc })}
                </ListItem>
            );
        });
    };

    return <List>{avatarList()}</List>;
}
