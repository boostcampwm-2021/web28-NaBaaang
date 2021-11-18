import { useState, useEffect } from 'react';
import { fetchAuthTokenValidation } from '@/apis/auth';

export default function useAuth() {
    const [userInfo, setUserInfo] = useState({ isSignIn: false });
    const [authLoading, setAuthLoading] = useState(true);

    const isTokenExist = () => {
        const { accessToken, refreshToken } = window.localStorage;
        return accessToken && refreshToken;
    };

    const setTokenToLocalStorage = ({ accessToken, refreshToken }) => {
        window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('refreshToken', refreshToken);
    };

    const removeTokenFromLocalStorage = () => {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
    };

    const isAuthTokenValidate = async () => {
        try {
            if (!isTokenExist()) {
                setAuthLoading(false);
                return;
            }
            const { accessToken, user, error } =
                await fetchAuthTokenValidation();

            if (error) {
                setAuthLoading(false);
                removeTokenFromLocalStorage();
                const { isSignIn } = userInfo;
                if (isSignIn) setUserInfo({ isSignIn: false });
                return;
            }
            window.localStorage.setItem('accessToken', accessToken);
            setUserInfo({ isSignIn: true, user });
            setAuthLoading(false);
        } catch (err) {
            throw new Error(err);
        }
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

    return { userInfo, authLoading, authSignIn, authSignOut };
}
