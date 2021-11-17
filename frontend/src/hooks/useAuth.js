import { useState, useEffect } from 'react';
import { fetchAuthTokenValidation } from '@/apis/auth';

export default function useAuth() {
    const [userInfo, setUserInfo] = useState({ isSignIn: false });

    const isAuthTokenValidate = async () => {
        try {
            const { accessToken, user } = await fetchAuthTokenValidation();
            window.localStorage.setItem('accessToken', accessToken);
            setUserInfo({ isSignIn: true, user });
        } catch (err) {
            setUserInfo({ isSignIn: false });
        }
    };

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
            setUserInfo({ isSignIn, user });
        } else {
            setUserInfo({ isSignIn: false });
        }
    };

    const authSignOut = () => {
        removeTokenFromLocalStorage();
    };

    useEffect(() => {
        isAuthTokenValidate();
    }, []);

    return { userInfo, authSignIn, authSignOut };
}
