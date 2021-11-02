import React, { useEffect, useState } from 'react';

const LiveLists = () => {
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

    return <p>{JSON.stringify(liveLists)}</p>;
};

export default LiveLists;
