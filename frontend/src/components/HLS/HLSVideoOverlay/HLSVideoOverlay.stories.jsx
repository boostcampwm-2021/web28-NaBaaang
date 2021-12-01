import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '@/components/Common/Box';
import HLSVideoOverlay from './HLSVideoOverlay';

storiesOf('HLSVideoOverlay', module)
    .add('Not Open', () => (
        <Box width="100%" height="100%">
            <HLSVideoOverlay />
        </Box>
    ))
    .add('Open', () => (
        <Box width="100%" height="100%">
            <HLSVideoOverlay open />
        </Box>
    ));
