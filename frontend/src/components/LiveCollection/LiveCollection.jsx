import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LiveList from './LiveList';

function LiveCollection() {
    const [liveLists, setLiveLists] = useState([]);

    const LiveLists = liveLists.map(liveList => (
        <LiveList liveList={liveList} />
    ));

    const fetchLiveLists = async () => {
        const response = await fetch('http://localhost:6006/dummy.json');
        const data = await response.json();
        setLiveLists(data);
    };

    useEffect(() => {
        fetchLiveLists();
    }, []);

    return <CollectionLayout>{LiveLists}</CollectionLayout>;
}

const CollectionLayout = styled.div`
    height: 100%;
    margin-right: 0;
`;

export default LiveCollection;
