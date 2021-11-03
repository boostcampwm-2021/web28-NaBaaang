import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LiveList from './LiveList';

function LiveCollection({ lives }) {
    const [liveLists, setLiveLists] = useState([]);

    useEffect(() => {
        setLiveLists(lives);
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
