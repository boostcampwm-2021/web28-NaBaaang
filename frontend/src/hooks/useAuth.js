import { useReducer, useState, useEffect } from 'react';

import userAuthReducer from '@/reducer/userAuthReducer';
import { isTokenExist, removeItemFromLocalStorage } from '@/util';
import fetchAction from '@/apis/fetchAction';
import { AUTH_TOKEN_LIST } from '@/constants/auth';
import STATUS from '@/constants/statusCode';

export default function useAuth() {
    const [userInfo, dispatch] = useReducer(userAuthReducer, {
        isSignIn: false,
    });

    const [authLoading, setAuthLoading] = useState(true);

    const isAuthTokenValidate = async () => {
        try {
            if (!isTokenExist(AUTH_TOKEN_LIST)) {
                setAuthLoading(false);
                removeItemFromLocalStorage(AUTH_TOKEN_LIST);
                return;
            }

            const { data, status } = await fetchAction({
                type: 'FETCH_AUTH_TOKEN_VALIDATION',
            });

            if (status === STATUS.UNAUTHORIZED) {
                setAuthLoading(false);
                dispatch({
                    type: 'SIGN_OUT',
                });
                return;
            }

            const { accessToken, refreshToken, decoded } = data;

            dispatch({
                type: 'SIGN_IN_SUCCESS',
                payload: {
                    user: decoded,
                    accessToken,
                    refreshToken,
                },
            });
            setAuthLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        isAuthTokenValidate();
    }, []);

    return {
        userInfo,
        authLoading,
        dispatch,
    };
}
