import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PAGE_ROLE } from '@/constants/role';

import { Loading } from '@/components/Common';
import GoogleAuthCallback from '@/components/OauthCallback/GoogleAuthCallback';
import PublicRoute from './components/Route/PublicRoute';
import PrivateRoute from './components/Route/PrivateRoute';

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
                        element={
                            <PublicRoute
                                component={LiveCollection}
                                role={PAGE_ROLE.LIVE_COLLECTION}
                            />
                        }
                    />
                    <Route
                        path="channel/:channelId"
                        element={
                            <PublicRoute
                                component={Channel}
                                role={PAGE_ROLE.CHANNEL}
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
                    element={<PrivateRoute component={ChannelManager} />}
                />
            </Routes>
        </Suspense>
    );
}
