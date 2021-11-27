import React, { useContext } from 'react';
import { ROLE, PAGE_ROLE } from '@/constants/role';
import { UserContext } from '@/store/UserStore';

export default function PublicRoute({ component: Component }) {
    const {
        userInfo: { isSignIn },
    } = useContext(UserContext);
    const role = isSignIn ? ROLE.ALL : PAGE_ROLE[Component.name];

    return <Component role={role} />;
}
