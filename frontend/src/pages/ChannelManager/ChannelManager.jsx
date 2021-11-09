import React from 'react';

import fetchAction from '@/constants/fetchAction';
import useFetch from '@/hooks/useFetch';

import DashBoard from '@/components/DashBoard';

export default function ChannelManager({ match }) {
    const { params } = match;
    const { channelId } = params;
    const { url, option } = fetchAction({
        type: 'FETCH_GET_CHANNEL',
        payload: channelId,
    });

    const { data, loading, error } = useFetch(url, option);

    if (error) return <div>Error..</div>;
    if (loading) return <div>loading..</div>;
    if (!data) return <div>null data...</div>;

    return <DashBoard info={data} />;
}
