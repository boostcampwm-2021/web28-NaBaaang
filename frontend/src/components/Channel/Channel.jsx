import React from 'react';
import styled from 'styled-components';
import { flexMixin } from '@/styles/mixins';
import tempImage from '@/assets/images/kukucorn.jpg';
import Video from '@/components/Video';
import Chat from '@/components/Chat';
import Box from '@/components/Common/Box';
import ChannelDetail from './ChannelDetail';

export default function Channel() {
    const channelInfo = {
        id: 1,
        title: '크으으으롱의 리액트 후우욱스',
        views: 12000,
        streamer: {
            nickname: 'Crong',
            imageSrc: tempImage,
        },
        category: '프로그래밍',
        isFollow: false,
        videoSrc:
            'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
    };
    return (
        <Wapper>
            <Box flexDirection="column" height="100%" flex={3}>
                <Box width="100%" flex={5}>
                    <Video videoSrc={channelInfo.videoSrc} />
                </Box>
                <Box width="100%" flex={1}>
                    <ChannelDetail channelInfo={channelInfo} />
                </Box>
            </Box>

            <Box height="100%" flex={1}>
                <Chat />
            </Box>
        </Wapper>
    );
}

const Wapper = styled.div`
    width: 100%;
    height: 100%;
    ${flexMixin('row', 'flex-start')}
`;
