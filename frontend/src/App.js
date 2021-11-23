import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
        <UserStore>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route
                        path=""
                        element={<PublicRoute component={LiveCollection} />}
                    />
                    <Route
                        path="channel/:channelId"
                        element={<PublicRoute component={Channel} />}
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
        </UserStore>
    );
}

export default App;
