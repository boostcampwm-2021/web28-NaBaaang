import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { fetchOpenChannel, fetchCloseChannel } from '@/apis/channel';
import ChatSocket from '@/socket';

import Box from '@/components/Common/Box';
import DashBoardInfo from './DashBoardInfo';
import DashBoardVideo from './DashBoardVideo';
import DashBoardTab from './DashBoardTab';
import Chat from '../Chat';
import Divider from '../Common/Divider/Divider';

export default function DashBoard({ info }) {
    const streamKey = info.stream_key;
    const { id } = info;
    const [isLive, setIsLive] = useState(info.isLive);

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
            setIsLive(false);
            ChatSocket.emit('alert-disconnect', {
                message: '방송을 종료합니다',
            });
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        ChatSocket.emit('join', { roomId: id });
    }, []);

    return (
        <Box backgroundColor="black2" height="100%" alignItems="stretch">
            <StyledBox flex={1}>
                <DashBoardTab text="방송 정보" />
                <DashBoardInfo info={info} />
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
                <Chat />
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
