import React from 'react';
import { storiesOf } from '@storybook/react';
import DashBoardInfo from './DashBoardInfo';

const dummyData = {
    title: '바삭끝판왕 BBQ 황금올리브치킨 먹방!🍗',
    description:
        '치즈스틱 새우스 틱까지 양념에 푹푹 찍어먹기 Fried Chicken Drumsticks Mukbang ASMR',
    category: ['먹방', '요리'],
};

storiesOf('DashBoardInfo', module).add('default', () => (
    <DashBoardInfo {...dummyData} />
));
