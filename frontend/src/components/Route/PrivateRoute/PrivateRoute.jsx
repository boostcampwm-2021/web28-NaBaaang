import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/store/userStore';

export default function PrivateRoute({ children }) {
    const {
        userInfo: { isSignIn },
    } = useContext(UserContext);

    if (!isSignIn) {
        return <Navigate to="/" />;
    }

    return children;
}
