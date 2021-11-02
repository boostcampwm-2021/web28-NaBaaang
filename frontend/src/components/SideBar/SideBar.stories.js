import React from 'react';

import SideBar from './index.jsx';

export default {
    component: SideBar,
    title: 'SideBar',
};

const Template = () => <SideBar />;

export const Default = Template.bind({});
Default.args = {};
