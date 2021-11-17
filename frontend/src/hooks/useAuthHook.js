import { useState } from 'react';

export default function useAuthHook() {
    const [userInfo, setUserInfo] = useState({ isSignIn: false });

    const setTokenToLocalStorage = ({ accessToken, refreshToken }) => {
        window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('refreshToken', refreshToken);
    };

    const removeTokenFromLocalStorage = () => {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
    };

    const authSignIn = ({ type, payload }) => {
        if (type === 'success') {
            const { user, accessToken, refreshToken, isSignIn } = payload;
            setTokenToLocalStorage({ accessToken, refreshToken });
            setUserInfo({ user, isSignIn });
        } else {
            const { isSignIn } = payload;
            setUserInfo({ isSignIn });
        }
    };

    const authSignOut = () => {
        removeTokenFromLocalStorage();
    };
    return { userInfo, authSignIn, authSignOut };
}
