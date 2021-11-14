import React from 'react';

import useFetch from '@/hooks/useFetch';

import DashBoard from '@/components/DashBoard';
import PageStatus from '@/components/Common/PageStatus';

export default function ChannelManager({ match }) {
    const { params } = match;
    const { channelId } = params;
    const { data, loading, error } = useFetch({
        type: 'FETCH_GET_CHANNEL',
        payload: channelId,
    });

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

    return <DashBoard info={data} />;
}
