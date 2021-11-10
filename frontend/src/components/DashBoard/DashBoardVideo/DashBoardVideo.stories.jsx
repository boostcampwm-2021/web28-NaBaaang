import React from 'react';
import { storiesOf } from '@storybook/react';
import DashBoardVideo from './DashBoardVideo';

const streamKey = '91eca7f2-53a8-4b9e-8b6e-c9ba317b43cb';

storiesOf('DashBoardVideo', module).add('default', () => (
    <DashBoardVideo streamKey={streamKey} />
));
