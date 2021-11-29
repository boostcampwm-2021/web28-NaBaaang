import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from '@/hooks/useFetch';
import useSocket from '@/hooks/useSocket';

import HLSVideo from '@/components/HLS/HLSVideo';
import Chat from '@/components/Chat';
import Box from '@/components/Common/Box';
import ChannelDetail from './ChannelDetail';
import PageStatus from '../Common/PageStatus';

export default function Channel({ role }) {
    const params = useParams();
    const { channelId } = params;
    const { data, error, loading } = useFetch({
        type: 'FETCH_GET_CHANNEL',
        payload: channelId,
    });

    useEffect(() => {
        console.log('Channel component');
        console.log(role);
    }, []);
    const { userCnt } = useSocket(data);

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

    return (
        <Box flex={1} width="100%" height="100%" alignItems="flex-start">
            <Box flexDirection="column" height="100%" flex={3}>
                <Box width="100%" flex={5}>
                    <HLSVideo streamKey={data.streamKey} />
                </Box>

                <Box
                    width="100%"
                    flex={1}
                    alignItems="unset"
                    justifyContent="unset"
                >
                    <ChannelDetail channelInfo={data} userCnt={userCnt} />
                </Box>
            </Box>

            <ChatMessageBox height="100%" flex={1}>
                <Chat role={role} />
            </ChatMessageBox>
        </Box>
    );
}

const ChatMessageBox = styled(Box)`
    padding: 0 0.5rem;
    border: 1px solid ${({ theme }) => theme.color.gray2};
`;
