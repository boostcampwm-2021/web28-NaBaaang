import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { setItemToLocalStorage } from '@/util';

import { fetchSiginInGoogle } from '@/apis/auth';
import { UserContext } from '@/store/UserStore';
import { Loading } from '@/components/Common';

export default function GoogleAuthCallback() {
    const { dispatch } = useContext(UserContext);
    const { search } = useLocation();
    const navigate = useNavigate();
    const { code, state } = qs.parse(search, {
        ignoreQueryPrefix: true,
    });
    const { referrer } = JSON.parse(state);

    const handleSignIn = async () => {
        try {
            const res = await fetchSiginInGoogle(code);
            const { user, accessToken, refreshToken } = res;
            setItemToLocalStorage({ accessToken, refreshToken });
            dispatch({
                type: 'SIGN_IN_SUCCESS',
                payload: { user },
            });
        } catch (err) {
            dispatch({ type: 'SIGN_IN_ERROR' });
        } finally {
            navigate(referrer);
        }
    };

    useEffect(() => {
        handleSignIn();
    }, []);

    return <Loading />;
}
