import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/store/UserStore';

export default function PrivateRoute({ children }) {
    const {
        userInfo: { isSignIn },
        authLoading,
    } = useContext(UserContext);

    if (authLoading) return <div>Loading.....</div>;
    if (!isSignIn) return <Navigate to="/" />;

    return children;
}
