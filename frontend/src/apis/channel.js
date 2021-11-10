import fetchAction from '@/constants/fetchAction';

async function fetchCreateChannel(formData) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_CREATE_CHANNEL',
            payload: formData,
        });

        const res = await fetch(url, option);
        const json = await res.json();
        return json;
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
        const res = await fetch(url, option);
        const json = await res.json();
        return json;
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
        const res = await fetch(url, option);
        const json = await res.json();
        return json;
    } catch (err) {
        throw new Error(err);
    }
}

export { fetchCreateChannel, fetchOpenChannel, fetchCloseChannel };
