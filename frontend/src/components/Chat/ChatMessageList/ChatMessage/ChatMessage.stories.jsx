import { storiesOf } from '@storybook/react';
import React from 'react';
import ChatMessage from './ChatMessage';

storiesOf('Chat/Message', module)
    .add('normal', () => (
        <ChatMessage type="NORMAL" nickname="jihoho" content="쉬워보이네요!" />
    ))
    .add('donation', () => (
        <ChatMessage type="DONATION" nickname="jihoho" content="BIT_100" />
    ));
