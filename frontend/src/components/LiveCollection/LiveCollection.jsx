import React from 'react';
import styled from 'styled-components';

import useFetch from '@/hooks/useFetch';

import { PageStatus } from '@/components/Common';
import LiveList from './LiveList/LiveList';

export default function LiveCollection() {
    const { data, error, loading } = useFetch({
        type: 'FETCH_GET_LIVE_CHANNELS',
        payload: '',
    });

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

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
