import fetchAction from '@/constants/fetchAction';
import { getFetchData } from '@/util/fetchUtil';

async function fetchSiginInGoogle(code) {
    const { url, option } = fetchAction({
        type: 'FETCH_SIGN_IN_GOOGLE',
        payload: { code },
    });
    const { data } = await getFetchData(url, option);
    return data;
}

async function fetchAuthTokenValidation() {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_AUTH_TOKEN_VALIDATION',
        });
        const { data } = await getFetchData(url, option);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export { fetchSiginInGoogle, fetchAuthTokenValidation };
