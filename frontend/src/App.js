import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';

function App() {
    return (
        <StyledApp>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 100%;
    height: 100%;
`;

export default App;
