import React from 'react';
import styled from 'styled-components';
import { flexMixin } from '@/styles/mixins';
import tempImage from '@/assets/images/kukucorn.jpg';
import Video from '@/components/Video';
import Chat from '@/components/Chat';
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
        <>
            <StyledRow>
                <StyledColumnLeft>
                    <Video videoSrc={channelInfo.videoSrc} />
                    <ChannelDetail channelInfo={channelInfo} />
                </StyledColumnLeft>
                <StyledColumnRight>
                    <Chat />
                </StyledColumnRight>
            </StyledRow>
        </>
    );
}

const StyledColumnLeft = styled.div`
    width: 70%;
    ${flexMixin('column')}
`;
const StyledColumnRight = styled.div`
    width: 30%;
    ${flexMixin('column')}
    margin: 0 1em;
`;

const StyledRow = styled.div`
    ${flexMixin('row')}
    width: 90%;
    height: 100%;
`;
