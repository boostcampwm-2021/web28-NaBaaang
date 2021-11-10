import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Box from '@/components/Common/Box';
import VideoOverlay from '.';

storiesOf('VideoOverlay', module)
    .add('Not Open', () => (
        <Box width="100%" height="100%">
            <VideoOverlay />
        </Box>
    ))
    .add('Open', () => (
        <Box width="100%" height="100%">
            <VideoOverlay open />
        </Box>
    ));
