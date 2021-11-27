import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaInfoModalContent from './MediaInfo';

const info = {
    streamKey: '91eca7f2-53a8-4b9e-8b6e-c9ba317b43cb',
};

storiesOf('MediaInfoModal', module).add('default', () => (
    <MediaInfoModalContent streamKey={info.streamKey} open />
));
