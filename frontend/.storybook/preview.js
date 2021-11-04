import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';

export const decorators = [
    Story => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
                <Story />
                <div id="modal-root"></div>
            </BrowserRouter>
        </ThemeProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
