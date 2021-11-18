import React, { useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { fetchOpenChannel, fetchCloseChannel } from '@/apis/channel';
import useFetch from '@/hooks/useFetch';
import useSocket from '@/hooks/useSocket';
import socket from '@/socket';
import { ROLE } from '@/constants/role';

import Box from '@/components/Common/Box';
import AlertModal from '@/components/AlertModal';
import DashBoardInfo from './DashBoardInfo';
import DashBoardVideo from './DashBoardVideo';
import DashBoardTab from './DashBoardTab';
import Chat from '../Chat';
import Divider from '../Common/Divider/Divider';
import PageStatus from '../Common/PageStatus';

export default function DashBoard() {
    const params = useParams();
    const { channelId } = params;
    const navigate = useNavigate();
    const [isLive, setIsLive] = useState(false);
    const { data, loading, error } = useFetch({
        type: 'FETCH_CHANNEL_AUTHENTICATE',
        payload: channelId,
    });
    const { id, streamKey } = data;

    const { openAlertModal } = useSocket(data);
    const role = ROLE.ALL;

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

    if (data.role !== 'ROLE_OWNER') return <Navigate to="/" />;

    if (data) {
        setIsLive(data.isLive);
    }

    const handleStartLive = async () => {
        try {
            await fetchOpenChannel(id);
            setIsLive(true);
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
                    isLive={isLive}
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
