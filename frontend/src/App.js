import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';
import ChannelManager from './pages/ChannelManager';

function App() {
    return (
        <StyledApp>
            <BrowserRouter>
                <div id="modal-root" />
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route
                        path="/u/:userId/stream-manager/:channelId"
                        component={ChannelManager}
                    />
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
