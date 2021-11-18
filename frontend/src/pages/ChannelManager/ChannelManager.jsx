import React from 'react';

import { useParams, Navigate } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';

import DashBoard from '@/components/DashBoard';
import PageStatus from '@/components/Common/PageStatus';

export default function ChannelManager() {
    const params = useParams();
    const { channelId } = params;
    const { data, loading, error } = useFetch({
        type: 'FETCH_CHANNEL_AUTHENTICATE',
        payload: channelId,
    });

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

    if (data.role !== 'ROLE_OWNER') return <Navigate to="/" />;
    return <DashBoard info={data} />;
}
