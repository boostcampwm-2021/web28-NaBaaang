/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserStore = props => {
    const [auth, setAuth] = useState({isSignIn:false});

    const authLogin = payload => {
        setAuth({ ...payload, isSignIn: true });
    };

    return (
        <UserContext.Provider value={{auth,authLogin }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserStore;
