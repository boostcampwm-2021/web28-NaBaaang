import React from 'react';
import { storiesOf } from '@storybook/react';
import ChannelManager from './ChannelManager';

const dummyInfo = {
    title: '바삭끝판왕 BBQ 황금올리브치킨 먹방!🍗',
    description:
        '치즈스틱 새우스 틱까지 양념에 푹푹 찍어먹기 Fried Chicken Drumsticks Mukbang ASMR',
    category: ['먹방', '요리'],
    stream_key: '91eca7f2-53a8-4b9e-8b6e-c9ba317b43cb',
};

storiesOf('ChannelManager', module).add('default', () => (
    <ChannelManager info={dummyInfo} />
));
