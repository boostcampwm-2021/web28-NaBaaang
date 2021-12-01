import React, { useState, useEffect, useRef } from 'react';
import Box from '@/components/Common/Box';
import tempImage from '@/assets/images/kukucorn.jpg';

import SideBarStreamer from './SideBarStreamer';

export default function SideBarStreamerList() {
    const [streamerList, setStreamerList] = useState([]);
    const listRef = useRef();

    useEffect(() => {
        const newStreamerList = [
            { id: 1, imageSrc: tempImage },
            { id: 2, imageSrc: tempImage },
            { id: 3, imageSrc: tempImage },
            { id: 4, imageSrc: tempImage },
            { id: 5, imageSrc: tempImage },
        ];
        setStreamerList([...newStreamerList]);
    }, []);

    const avatarListItems = streamerList.map(({ id, imageSrc }) => (
        <SideBarStreamer key={id} id={id} imageSrc={imageSrc} />
    ));

    return (
        <Box
            flexDirection="column"
            justifyConent="flex-start"
            alignItems="center"
            ref={listRef}
        >
            {avatarListItems}
        </Box>
    );
}
