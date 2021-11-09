import React from 'react';
import { storiesOf } from '@storybook/react';
import Chip from './Chip';

storiesOf('Chip', module)
    .add('error', () => <Chip text="Click" color="error" />)
    .add('success', () => <Chip text="Click" color="success" />)
    .add('onDelete', () => (
        <Chip text="Click" color="success" onDelete={() => alert('onDelte!')} />
    ));
