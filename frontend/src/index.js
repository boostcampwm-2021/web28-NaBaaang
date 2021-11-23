import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import ModalStore from '@/store/ModalStore';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <ModalStore>
                    <GlobalStyle />
                    <App />
                    <div id="modal-root" />
                </ModalStore>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
