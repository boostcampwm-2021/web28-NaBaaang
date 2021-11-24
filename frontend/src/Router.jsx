import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loading } from '@/components/Common';
import PublicRoute from './components/Route/PublicRoute';
import PrivateRoute from './components/Route/PrivateRoute';
import GoogleAuthCallback from '@/auth/GoogleAuthCallback';

const Main = lazy(() => import('./pages/Main'));
const ChannelManager = lazy(() => import('./pages/ChannelManager'));
const LiveCollection = lazy(() => import('@/components/LiveCollection'));
const Channel = lazy(() => import('@/components/Channel'));

export default function Router() {
    return (
        <Suspense fallback={<Loading />}>
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
        </Suspense>
    );
}
