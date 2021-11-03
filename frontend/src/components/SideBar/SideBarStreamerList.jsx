import React, { useState, useEffect } from 'react';
import SideBarStreamerItem from 'SideBarStreamerItem';

import styled from 'styled-components';

import tempImage from '@/assets/images/kukucorn.jpg';

export default function SideBarStreamerList() {
    const [streamerList, setStreamerList] = useState([]);

    useEffect(() => {
        // 현재는 임시 데이터를 사용, 후에 api 호출해서 갱신해주면 됨.
        const newStreamerList = [
            { id: 1, imageSrc: tempImage },
            { id: 2, imageSrc: tempImage },
            { id: 3, imageSrc: tempImage },
            { id: 4, imageSrc: tempImage },
            { id: 5, imageSrc: tempImage },
        ];
        setStreamerList([...newStreamerList]);
    }, []);

    const avatarListItems = () => {
        return streamerList.map(streamer => {
            return SideBarStreamerItem({ streamer });
        });
    };

    return <AvatarList>{avatarListItems()}</AvatarList>;
}

const AvatarList = styled.ul`
    list-style-type: none;
`;
