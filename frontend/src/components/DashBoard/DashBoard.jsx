import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { fetchOpenChannel, fetchCloseChannel } from '@/apis/channel';
import socket from '@/Socket';

import Box from '@/components/Common/Box';
import DashBoardInfo from './DashBoardInfo';
import DashBoardVideo from './DashBoardVideo';
import DashBoardTab from './DashBoardTab';
import Chat from '../Chat';

export default function DashBoard({ info }) {
    const streamKey = info.stream_key;
    const history = useHistory();

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
            socket.endChannel();
            history.push('/');
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        socket.joinChannel({ channelId: id, auth: 'streamer' });
    }, []);

    return (
        <Box type="black" height="100%" alignItems="stretch">
            <Box
                flex={1}
                padding={1}
                flexDirection="column"
                alignItems="stretch"
            >
                <DashBoardTab text="방송 정보" />
                <DashBoardInfo info={info} />
            </Box>
            <StyledBox
                flex={3}
                padding={1}
                flexDirection="column"
                alignItems="stretch"
            >
                <DashBoardTab text="방송 송출 칸" />
                <DashBoardVideo
                    streamKey={streamKey}
                    isLive={isLive}
                    handleStartLive={handleStartLive}
                    handleEndLive={handleEndLive}
                />
            </StyledBox>
            <Box
                flex={1}
                flexDirection="column"
                padding={1}
                alignItems="stretch"
            >
                <DashBoardTab text="채팅칸" />
                <Chat />
            </Box>
        </Box>
    );
}

const StyledBox = styled(Box)`
    box-sizing: content-box;
    border-left: 0.5px solid ${({ theme }) => theme.color.gray1};
    border-right: 0.5px solid ${({ theme }) => theme.color.gray1};
`;
