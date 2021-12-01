import React, { useContext } from 'react';
import { UserContext } from '@/store/UserStore';

import { ROLE } from '@/constants/role';

export default function PublicRoute({ component: Component, role }) {
    const {
        userInfo: { isSignIn },
    } = useContext(UserContext);

    const pageRole = isSignIn ? ROLE.ALL : role;

    return <Component role={pageRole} />;
}
