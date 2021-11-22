import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { fetchSiginInGoogle } from '@/apis/auth';
import { UserContext } from '@/store/userStore';

export default function GoogleAuthCallback() {
    const { authSignIn } = useContext(UserContext);
    const { search } = useLocation();
    const navigate = useNavigate();
    const { code, state } = qs.parse(search, {
        ignoreQueryPrefix: true,
    });
    const { referrer } = JSON.parse(state);

    const handleSignIn = async () => {
        try {
            const res = await fetchSiginInGoogle(code);
            authSignIn({
                type: 'success',
                payload: { ...res, isSignIn: true },
            });
        } catch (err) {
            authSignIn({ type: 'error' });
        } finally {
            navigate(referrer);
        }
    };

    useEffect(() => {
        handleSignIn();
    }, []);

    return <div />;
}
