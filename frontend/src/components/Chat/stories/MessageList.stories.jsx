import { storiesOf } from '@storybook/react';
import React from 'react';
import MessageList from '../MessageList';

const messageList = [
    { id: 1, type: 'NORMAL', nickname: 'jihoho', content: '쉬워보이네요!' },
    { id: 2, type: 'NORMAL', nickname: 'jihoho', content: '쉬워보이네요!' },
    { id: 3, type: 'NORMAL', nickname: 'jihoho', content: '쉬워보이네요!' },
    // { type: 'DONATION', nickname: 'jihoho', content: 'BIT_1' },
    { id: 4, type: 'DONATION', nickname: 'jihoho', content: 'BIT_50' },
    { id: 5, type: 'DONATION', nickname: 'jihoho', content: 'BIT_100' },
    { id: 6, type: 'DONATION', nickname: 'jihoho', content: 'BIT_300' },
    { id: 7, type: 'DONATION', nickname: 'jihoho', content: 'BIT_500' },
];

storiesOf('Chat/MessageList', module).add('default', () => (
    <MessageList messageList={messageList} />
));
