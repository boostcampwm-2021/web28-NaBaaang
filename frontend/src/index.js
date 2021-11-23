import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div id="modal-root" />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
