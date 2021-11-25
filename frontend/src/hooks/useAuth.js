import { useState, useEffect } from 'react';
import { fetchAuthTokenValidation } from '@/apis/auth';
import {
    isTokenExist,
    setItemToLocalStorage,
    removeItemFromLocalStorage,
} from '@/util';

import { AUTH_TOKEN_LIST } from '@/constants/auth';

export default function useAuth() {
    const [userInfo, setUserInfo] = useState({ isSignIn: false });
    const [authLoading, setAuthLoading] = useState(true);

    const isAuthTokenValidate = async () => {
        try {
            if (!isTokenExist(AUTH_TOKEN_LIST)) {
                setAuthLoading(false);
                removeItemFromLocalStorage(AUTH_TOKEN_LIST);
                return;
            }
            const { accessToken, decoded, error } =
                await fetchAuthTokenValidation();

            if (error) {
                setAuthLoading(false);
                removeItemFromLocalStorage(AUTH_TOKEN_LIST);
                const { isSignIn } = userInfo;
                if (isSignIn) setUserInfo({ isSignIn: false });
                return;
            }
            window.localStorage.setItem('accessToken', accessToken);
            setUserInfo({ isSignIn: true, user: decoded });
            setAuthLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    const authSignIn = ({ type, payload }) => {
        if (type === 'success') {
            const { user, accessToken, refreshToken, isSignIn } = payload;
            setItemToLocalStorage({ accessToken, refreshToken });
            setUserInfo({ isSignIn, user });
        } else {
            setUserInfo({ isSignIn: false });
        }
    };

    const authSignOut = () => {
        removeItemFromLocalStorage(AUTH_TOKEN_LIST);
        setUserInfo({ isSignIn: false });
    };

    useEffect(() => {
        isAuthTokenValidate();
    }, []);

    return { userInfo, setUserInfo, authLoading, authSignIn, authSignOut };
}
