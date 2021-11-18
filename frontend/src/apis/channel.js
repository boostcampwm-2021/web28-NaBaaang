import fetchAction from '@/constants/fetchAction';

async function getFetchData(url, option) {
    const res = await fetch(url, option);
    const json = await res.json();
    return json;
}

async function fetchCreateChannel(formData) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_CREATE_CHANNEL',
            payload: formData,
        });

        return await getFetchData(url, option);
    } catch (err) {
        throw new Error(err);
    }
}

async function fetchOpenChannel(id) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_OPEN_CHANNEL',
            payload: id,
        });
        return await getFetchData(url, option);
    } catch (err) {
        throw new Error(err);
    }
}

async function fetchCloseChannel(id) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_CLOSE_CHANNEL',
            payload: id,
        });
        return await getFetchData(url, option);
    } catch (err) {
        throw new Error(err);
    }
}

async function fetchAuthChannel(id) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_CHANNEL_AUTHENTICATE',
            payload: id,
        });
        return await getFetchData(url, option);
    } catch (err) {
        throw new Error(err);
    }
}

export {
    fetchCreateChannel,
    fetchOpenChannel,
    fetchCloseChannel,
    fetchAuthChannel,
};
