import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Main from './pages/Main';
import ChannelManager from './pages/ChannelManager';
import Callback from './components/Callback/Callback';
import UserStore from './store/userStore';

function App() {
    return (
        <StyledApp>
            <UserStore>
                <BrowserRouter>
                    <div id="modal-root" />
                    <Switch>
                        <Route
                            path="/stream-manager/:channelId"
                            component={ChannelManager}
                        />
                        <Route
                            path="/auth/google/callback"
                            component={Callback}
                        />
                        <Route path="/" component={Main} />
                    </Switch>
                </BrowserRouter>
            </UserStore>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 100%;
    height: 100%;
`;

export default App;
