import React from 'react';
import useAuth from '@/hooks/useAuth';

export const UserContext = React.createContext();

export function UserStore({ children }) {
    const auth = useAuth();

    return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
}
