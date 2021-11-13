import React from 'react';
import styled from 'styled-components';

import useFetch from '@/hooks/useFetch';

import LiveList from './LiveList';

function LiveCollection() {
    const { data, error, loading } = useFetch({
        type: 'FETCH_GET_LIVE_CHANNELS',
        payload: '',
    });

    if (loading) return <div>loading...</div>;
    if (error) return <div>Fetch Error...</div>;
    if (!data) return <div>empty data...</div>;

    const LiveLists = Object.entries(data).map(([category, liveList]) => {
        return (
            <LiveList key={category} liveList={liveList} category={category} />
        );
    });

    return <CollectionLayout>{LiveLists}</CollectionLayout>;
}

const CollectionLayout = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 0;
`;

export default LiveCollection;
