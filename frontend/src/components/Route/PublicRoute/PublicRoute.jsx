import React, { useContext } from 'react';
import { ROLE } from '@/constants/role';
import { UserContext } from '@/store/UserStore';

export default function PublicRoute({ component: Component, role }) {
    const {
        userInfo: { isSignIn },
    } = useContext(UserContext);

    const pageRole = isSignIn ? ROLE.ALL : role;

    return <Component role={pageRole} />;
}
