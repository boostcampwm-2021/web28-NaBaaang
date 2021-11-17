import fetchAction from '@/constants/fetchAction';

async function getFetchData(url, option) {
    try {
        const res = await fetch(url, option);
        const json = await res.json();
        return json;
    } catch (err) {
        throw new Error(err);
    }
}

async function fetchSiginInGoogle(code) {
    const { url, option } = fetchAction({
        type: 'FETCH_SIGN_IN_GOOGLE',
        payload: { code },
    });
    const result = await getFetchData(url, option);
    return result;
}

async function fetchAuthTokenValidation() {
    const { url, option } = fetchAction({
        type: 'FETCH_AUTH_TOKEN_VALIDATION',
    });
    const result = await getFetchData(url, option);
    return result;
}

export { fetchSiginInGoogle, fetchAuthTokenValidation };
