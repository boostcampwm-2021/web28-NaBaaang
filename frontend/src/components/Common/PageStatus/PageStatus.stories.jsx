import React from 'react';
import PageStatus from './PageStatus';

export default {
    title: 'components|PageStatus',
    component: PageStatus,
};

export const loading = () => <PageStatus loading error={false} data="" />;
export const error = () => (
    <PageStatus name="Storybook" loading={false} error data="" />
);
export const noData = () => (
    <PageStatus name="Storybook" loading={false} error={false} />
);
