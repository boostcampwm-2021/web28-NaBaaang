import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';

import LiveCollection from '@/components/LiveCollection';
import Channel from '@/components/Channel/Channel';
import GoogleAuthCallback from '@/auth/GoogleAuthCallback';
import Main from './pages/Main';
import ChannelManager from './pages/ChannelManager';
import UserStore from './store/userStore';
import PublicRoute from './components/Route/PublicRoute';
import PrivateRoute from './components/Route/PrivateRoute';

function App() {
    return (
        <StyledApp>
            <UserStore>
                <BrowserRouter>
                    <div id="modal-root" />
                    <Routes>
                        <Route path="/" element={<Main />}>
                            <Route
                                path=""
                                element={
                                    <PublicRoute
                                        component={LiveCollection}
                                    />
                                }
                            />
                            <Route
                                path="channel/:channelId"
                                element={
                                    <PublicRoute
                                        component={Channel}
                                    />
                                }
                            />
                        </Route>
                        <Route
                            path="/auth/google/callback"
                            element={<GoogleAuthCallback />}
                        />

                        <Route
                            path="/stream-manager/:channelId"
                            element={
                                <PrivateRoute>
                                    <ChannelManager />
                                </PrivateRoute>
                            }
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
