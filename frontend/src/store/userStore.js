import React from 'react';
import useAuthHook from '@/hooks/useAuthHook';

export const UserContext = React.createContext();

export default function UserStore({ children }) {
    const auth = useAuthHook();

    return (
        <UserContext.Provider value={auth}>{children}</UserContext.Provider>
    );
}
