import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { fetchSiginInGoogle } from '../../apis/auth';
import { UserContext } from '../../store/userStore';

export default function GoogleAuthCallback() {
    const { authLogin } = useContext(UserContext);
    const { search } = useLocation();
    const { code } = qs.parse(search, {
        ignoreQueryPrefix: true,
    });
    const navigate = useNavigate();

    const handleCode = async () => {
        try {
            const { accessToken, refreshToken } = await fetchSiginInGoogle(
                code,
            );
            const payload = {accessToken, refreshToken}
            authLogin(payload);
            navigate('/');
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        handleCode();
    }, []);
    return null;
}
