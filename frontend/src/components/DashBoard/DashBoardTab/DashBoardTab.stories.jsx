import React from 'react';
import { storiesOf } from '@storybook/react';
import DashBoardTab from './DashBoardTab';

storiesOf('DashBoardTab', module).add('default', () => (
    <DashBoardTab text="뉴스피드" />
));
