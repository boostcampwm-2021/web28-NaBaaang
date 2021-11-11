import React from 'react';
import { storiesOf } from '@storybook/react'
import tempImage from '@/assets/images/kukucorn.jpg';
import ChannelDetail from './ChannelDetail';

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

storiesOf('ChannelDetail', module).add('default', () => (
    <ChannelDetail channelInfo={channelInfo} />
));
