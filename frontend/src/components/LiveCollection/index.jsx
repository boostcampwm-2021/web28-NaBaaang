import React, { useEffect, useState } from 'react';
import LiveList from './LiveList';

const LiveCollections = () => {
    const [liveLists, setLiveLists] = useState([]);

    const fetchLiveLists = async () => {
        const response = await fetch('http://localhost:3000/dummy.json');
        const data = await response.json();
        setLiveLists(data);
    };

    useEffect(() => {
        console.log('fetching data....');
        fetchLiveLists();
    }, []);

    return (
        <>
            {liveLists.map(liveList => (
                <LiveList liveList={liveList} />
            ))}
        </>
    );
};

export default LiveCollections;
