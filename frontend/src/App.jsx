import React from 'react';
import UserStore from './store/UserStore';
import Router from './Router';

export default function App() {
    return (
        <UserStore>
            <Router />
        </UserStore>
    );
}
