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

async function fetchGetChannel(channelID) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_GET_CHANNEL',
            payload: channelID,
        });
        const res = await fetch(url, option);
        const json = await res.json();
        return json;
    } catch (err) {
        throw new Error(err);
    }
}

export { fetchCreateChannel, fetchGetChannel };
