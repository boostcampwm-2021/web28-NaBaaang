import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { fetchOpenChannel, fetchCloseChannel } from '@/apis/channel';
import useFetch from '@/hooks/useFetch';
import useSocket from '@/hooks/useSocket';
import socket from '@/socket';
import { ROLE } from '@/constants/role';

import Box from '@/components/Common/Box';
import AlertModal from '@/components/AlertModal';

import DashBoardInfo from '@/components/DashBoard/DashBoardInfo';
import DashBoardVideo from '@/components/DashBoard/DashBoardVideo';
import DashBoardTab from '@/components/DashBoard/DashBoardTab';

import Chat from '@/components/Chat';
import Divider from '@/components/Common/Divider/Divider';
import PageStatus from '@/components/Common/PageStatus';

export default function ChannelManager() {
    const params = useParams();
    const { channelId } = params;
    const navigate = useNavigate();
    const [isStreamLive, setIsStreamLive] = useState(false);
    const { data, loading, error } = useFetch({
        type: 'FETCH_CHANNEL_AUTHENTICATE',
        payload: channelId,
    });

    const { openAlertModal } = useSocket(data);
    const role = ROLE.ALL;

    useEffect(() => {
        if (data && isStreamLive !== data.isLive) {
            setIsStreamLive(data.isLive);
        }
    }, [data]);

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

    const { id, streamKey } = data;
    if (data.role !== 'ROLE_OWNER') return <Navigate to="/" />;

    const handleStartLive = async () => {
        try {
            await fetchOpenChannel(id);
            setIsStreamLive(true);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleEndLive = async () => {
        try {
            await fetchCloseChannel(id);
            socket.channel.endChannel();
            navigate('/');
        } catch (err) {
            throw new Error(err);
        }
    };

    return (
        <Box backgroundColor="black2" height="100%" alignItems="stretch">
            {openAlertModal && <AlertModal />}
            <StyledBox flex={1}>
                <DashBoardTab text="방송 정보" />
                <DashBoardInfo info={data} />
            </StyledBox>

            <Divider direction="column" />

            <StyledBox flex={4}>
                <DashBoardTab text="방송 송출 칸" />
                <DashBoardVideo
                    streamKey={streamKey}
                    isLive={isStreamLive}
                    handleStartLive={handleStartLive}
                    handleEndLive={handleEndLive}
                />
            </StyledBox>

            <Divider direction="column" />

            <StyledBox flex={1.5}>
                <DashBoardTab text="채팅 칸" />
                <Chat role={role} />
            </StyledBox>
        </Box>
    );
}

const StyledBox = styled(Box)`
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    box-sizing: content-box;
`;
