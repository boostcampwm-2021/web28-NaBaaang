import { useContext, useEffect } from 'react';
import qs from 'qs';
import { fetchSiginInGoogle } from '../../apis/auth';
import { UserContext } from '../../store/userStore';

const Callback = ({ history, location }) => {
    const { dispatch } = useContext(UserContext);
    useEffect(async () => {
        const { code } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        try {
            const { accessToken, refreshToken } = await fetchSiginInGoogle(
                code,
            );
            window.localStorage.token = accessToken;
            window.localStorage.refresh = refreshToken;
            dispatch({ type: 'LOGIN' });
            history.push('/');
        } catch (err) {
            throw new Error(err);
        }
    }, [location, history]);
    return null;
};

export default Callback;
