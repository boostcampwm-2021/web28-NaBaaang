/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useReducer } from 'react';
import { userReducer } from './reducer.js';

export const UserContext = React.createContext();

const UserStore = props => {
    const [user, dispatch] = useReducer(userReducer, { isSignin: true });

    useEffect(() => {
        dispatch({ type: 'LOGOUT' });
    }, []);

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserStore;
