import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';

import ModalStore from '@/store/modalStore';

export const decorators = [
    Story => (
        <ThemeProvider theme={theme}>
            <ModalStore>
                <GlobalStyle />
                <div id="modal-root"></div>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </ModalStore>
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
