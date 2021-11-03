import React, { useEffect, useState } from 'react';

const LiveLists = ({ shows }) => {
    const [liveLists, setLiveLists] = useState([]);

    // const fetchLiveLists = async () => {
    //     const response = await fetch('http://localhost:3000/dummy.json');
    //     const data = await response.json();
    //     setLiveLists(data);
    // };

    useEffect(() => {
        // fetchLiveLists();
        setLiveLists(shows);
    }, []);

    return <p>안녕 {JSON.stringify(liveLists)}</p>;
};

export default LiveLists;
