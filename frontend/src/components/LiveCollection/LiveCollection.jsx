import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LiveList from './LiveList';

const CATEGORY = {
    전체: 0,
    Game: 1,
    Zilla: 2,
};

function LiveCollection() {
    const [liveLists, setLiveLists] = useState([]);

    const LiveLists = liveLists.map(liveList => {
        const { category } = liveList[0];
        return (
            <LiveList
                key={CATEGORY[category]}
                liveList={liveList}
                category={category}
            />
        );
    });

    const fetchLiveLists = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_HOST}/dummy.json`,
        );
        const data = await response.json();
        setLiveLists(data);
    };

    useEffect(() => {
        fetchLiveLists();
    }, []);

    return <CollectionLayout>{LiveLists}</CollectionLayout>;
}

const CollectionLayout = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 0;
`;

export default LiveCollection;
