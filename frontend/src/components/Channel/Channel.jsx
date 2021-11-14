import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useFetch from '@/hooks/useFetch';
import socket from '@/Socket';

import Video from '@/components/Video';
import Chat from '@/components/Chat';
import Box from '@/components/Common/Box';
import ChannelDetail from './ChannelDetail';
import PageStatus from '../Common/PageStatus';
import AlertModal from './AlertModal';

export default function Channel({ match }) {
    const { params } = match;
    const { channelId } = params;
    const { data, error, loading } = useFetch({
        type: 'FETCH_GET_CHANNEL',
        payload: channelId,
    });
    const [openAlertModal, setAlertModal] = useState(false);

    useEffect(() => {
        socket.joinChannel({ channelId, auth: 'viewer' });
        socket.channelEnded({ setAlertModal });
    }, []);

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

    return (
        <Box flex={1} width="100%" height="100%" alignItems="flex-start">
            {openAlertModal && <AlertModal />}
            <Box flexDirection="column" height="100%" flex={3}>
                <Box width="100%" flex={3}>
                    <Video streamKey={data.stream_key} />
                </Box>
                <Box width="100%" flex={1}>
                    <ChannelDetail channelInfo={data} />
                </Box>
            </Box>

            <ChatMessageBox height="100%" flex={1}>
                <Chat />
            </ChatMessageBox>
        </Box>
    );
}

const ChatMessageBox = styled(Box)`
    padding: 0 0.5rem;
    border: 1px solid ${({ theme }) => theme.color.gray2};
`;
