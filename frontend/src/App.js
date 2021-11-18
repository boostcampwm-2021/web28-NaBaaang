import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';

import LiveCollection from '@/components/LiveCollection';
import Channel from '@/components/Channel/Channel';
import GoogleAuthCallback from '@/auth/GoogleAuthCallback';
import Main from './pages/Main';
import ChannelManager from './pages/ChannelManager';
import { UserStore } from './store/userStore';

function App() {
    return (
        <StyledApp>
            <UserStore>
                <BrowserRouter>
                    <div id="modal-root" />
                    <Routes>
                        <Route path="/" element={<Main />}>
                            <Route path="" element={<LiveCollection />} />
                            <Route
                                path="channel/:channelId"
                                element={<Channel />}
                            />
                        </Route>
                        <Route
                            path="/stream-manager/:channelId"
                            element={<ChannelManager />}
                        />
                        <Route
                            path="/auth/google/callback"
                            element={<GoogleAuthCallback />}
                        />
                    </Routes>
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
