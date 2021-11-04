import { storiesOf } from '@storybook/react';
import React from 'react';
import Message from '../Message';

storiesOf('Chat/Message', module)
    .add('normal', () => (
        <Message type="NORMAL" nickname="jihoho" content="쉬워보이네요!" />
    ))
    .add('donation', () => (
        <Message type="DONATION" nickname="jihoho" content="BIT_100" />
    ));
