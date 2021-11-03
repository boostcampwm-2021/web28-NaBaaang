import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import tempImage from '@/assets/images/kukucorn.jpg';

import SideBarStreamerItem from './SideBarStreamerItem';

export default function SideBarStreamerList() {
    const [streamerList, setStreamerList] = useState([]);
    const listRef = useRef();

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

    const avatarClickHandler = ({ target }) => {
        const li = target.closest('li');

        if (!li) return;
        if (!listRef.current.contains(li)) return;

        const { streamerId } = li.dataset;

        console.log(streamerId);

        // streamerId로 라우팅, streamer가 방송 중이 아니라면 에러 처리 해줘야함.
    };

    const avatarListItems = () => {
        return streamerList.map(streamer => {
            return SideBarStreamerItem({ streamer });
        });
    };

    return (
        <AvatarList ref={listRef} onClick={avatarClickHandler}>
            {avatarListItems()}
        </AvatarList>
    );
}

const AvatarList = styled.ul`
    list-style-type: none;
`;
