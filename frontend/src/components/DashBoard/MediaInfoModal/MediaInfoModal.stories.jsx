import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaInfoModal from './MediaInfoModal';

const info = {
    streamKey: '91eca7f2-53a8-4b9e-8b6e-c9ba317b43cb',
};

storiesOf('MediaInfoModal', module).add('default', () => (
    <MediaInfoModal streamKey={info.streamKey} open />
));
