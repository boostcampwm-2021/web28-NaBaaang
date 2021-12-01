import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useParams, Navigate } from 'react-router-dom';

import fetchAction from '@/apis/fetchAction';
import useFetch from '@/hooks/useFetch';
import useSocket from '@/hooks/useSocket';
import socket from '@/socket';

import { PageStatus, Box, Divider } from '@/components/Common';
import DashBoardInfo from '@/components/DashBoard/DashBoardInfo';
import DashBoardVideo from '@/components/DashBoard/DashBoardVideo';
import DashBoardTab from '@/components/DashBoard/DashBoardTab';
import Chat from '@/components/Chat';

export default function DashBoard({ role }) {
    const params = useParams();
    const { channelId } = params;
    const [isStreamLive, setIsStreamLive] = useState(false);
    const { data, loading, error, fetchData } = useFetch({
        type: 'FETCH_CHANNEL_AUTHENTICATE',
        payload: channelId,
    });

    const { userCnt } = useSocket(data);

    useEffect(() => {
        if (data && isStreamLive !== data.isLive) {
            setIsStreamLive(data.isLive);
        }
    }, [data]);

    if (loading || error || !data)
        return <PageStatus loading={loading} error={error} data={data} />;

    const { id, streamKey } = data;
    if (data.role !== role) return <Navigate to="/" />;

    const handleStartLive = async () => {
        try {
            await fetchAction({
                type: 'FETCH_OPEN_CHANNEL',
                payload: id,
            });
            setIsStreamLive(true);
        } catch (err) {
            throw new Error(err);
        }
    };

    const handleEndLive = async () => {
        try {
            await fetchAction({
                type: 'FETCH_CLOSE_CHANNEL',
                payload: id,
            });
            socket.channel.endChannel();
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
                <DashBoardInfo
                    info={data}
                    userCnt={userCnt}
                    fetchData={fetchData}
                />
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
                <Chat role={role} isDonation={false} />
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
