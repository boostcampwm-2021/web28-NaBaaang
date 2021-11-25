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

async function fetchUpdateNickname(data) {
    const { url, option } = fetchAction({
        type: 'FETCH_UPDATE_NICKNAME',
        payload: { data },
    });
    const result = await getFetchData(url, option);
    return result;
}

export { fetchUpdateNickname };
