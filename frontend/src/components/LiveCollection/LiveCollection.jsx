import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LiveList from './LiveList';

function LiveCollection() {
    const [liveLists, setLiveLists] = useState([]);

    const fetchLiveLists = async () => {
        const response = await fetch('http://localhost:3000/dummy.json');
        const data = await response.json();
        setLiveLists(data);
    };

    useEffect(() => {
        fetchLiveLists();
    }, []);

    return (
        <CollectionLayout>
            {liveLists.map(liveList => (
                <LiveList liveList={liveList} />
            ))}
        </CollectionLayout>
    );
}

const CollectionLayout = styled.div`
    height: 100%;
    margin: 3rem;
    margin-right: 0;
`;

export default LiveCollection;
