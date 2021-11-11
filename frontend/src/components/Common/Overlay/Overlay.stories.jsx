import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Box from '@/components/Common/Box';
import Overlay from './Overlay';

storiesOf('Overlay', module)
    .add('default', () => (
        <Box width="100%" height="100%">
            <Overlay />
        </Box>
    ))
    .add('onclick', () => (
        <Box width="100%" height="100%">
            <Overlay onClick={action('onClick!')} />
        </Box>
    ));
