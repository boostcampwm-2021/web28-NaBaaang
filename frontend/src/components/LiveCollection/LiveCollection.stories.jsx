import React from 'react';
import LiveCollection from './LiveCollection';

export default {
    component: LiveCollection,
    title: 'LiveCollection',
    decorators: [story => <div>{story()}</div>],
};

const Template = () => <LiveCollection />;
export const Default = Template.bind({});
