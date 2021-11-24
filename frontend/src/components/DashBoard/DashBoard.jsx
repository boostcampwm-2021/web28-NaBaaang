import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useNavigate, useParams, Navigate } from 'react-router-dom';

import { fetchOpenChannel, fetchCloseChannel } from '@/apis/channel';
import useFetch from '@/hooks/useFetch';
import useSocket from '@/hooks/useSocket';
import socket from '@/socket';
import { ROLE } from '@/constants/role';

import { PageStatus, Box, Divider } from '@/components/Common';
import DashBoardInfo from '@/components/DashBoard/DashBoardInfo';
import DashBoardVideo from '@/components/DashBoard/DashBoardVideo';
import DashBoardTab from '@/components/DashBoard/DashBoardTab';
import Chat from '@/components/Chat';

export default function DashBoard() {
    const params = useParams();
    const { channelId } = params;
    const navigate = useNavigate();
    const [isStreamLive, setIsStreamLive] = useState(false);
    const { data, loading, error, fetchData } = useFetch({
        type: 'FETCH_CHANNEL_AUTHENTICATE',
        payload: channelId,
    });

    const { userCnt } = useSocket(data);

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
        <DashBoardWrapper
            backgroundColor="black2"
            height="100%"
            alignItems="stretch"
        >
            <StyledBox flex={1}>
                <DashBoardTab text="방송 정보" />
                <DashBoardInfo info={data} userCnt={userCnt} fetchData={fetchData} />

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
        </DashBoardWrapper>
    );
}

const DashBoardWrapper = styled(Box)`
    width: 100%;
    height: 100%;
`;

const StyledBox = styled(Box)`
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    box-sizing: content-box;
`;
