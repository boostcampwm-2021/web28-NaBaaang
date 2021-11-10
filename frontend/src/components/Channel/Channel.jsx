import React, { useEffect } from 'react';
import styled from 'styled-components';

import useFetch from '@/hooks/useFetch';
import { ChatSocket } from '@/socket';

import Video from '@/components/Video';
import Chat from '@/components/Chat';
import Box from '@/components/Common/Box';
import ChannelDetail from './ChannelDetail';

export default function Channel({ match }) {
    const { params } = match;
    const { channelId } = params;
    const { data, error, loading } = useFetch(
        `http://localhost:4000/api/channels/${channelId}`,
    );

    useEffect(() => {
        ChatSocket.emit('join', { roomId: channelId });
    }, []);

    if (loading) return <div>loading...</div>;
    if (error) return <div>Fetch Error...</div>;
    if (!data) return <div>empty data...</div>;

    return (
        <Box flex={1} width="100%" height="100%" alignItems="flex-start">
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
