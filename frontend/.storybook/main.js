const React = require('react');
const customWebpackConfig = require('../craco.config.js');
const { addDecorator } = require('@storybook/react');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/preset-create-react-app',
    ],
    webpackFinal: async config => {
        const { webpack } = customWebpackConfig();

        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    ...webpack.alias,
                },
            },
        };
    },
};
