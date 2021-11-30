import fetchAction from '@/constants/fetchAction';
import { getFetchData, getFetchDataV2 } from './fetchUtill';

async function fetchCreateChannel(formData) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_CREATE_CHANNEL',
            payload: formData,
        });

        const { status, data } = await getFetchDataV2(url, option);
        return { status, data };
    } catch (err) {
        throw new Error(err);
    }
}
async function fetchUpdateChannel(formData) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_UPDATE_CHANNEL',
            payload: formData,
        });
        const data = await getFetchData(url, option);
        return data;
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
async function fetchPauseChannel(id) {
    try {
        const { url, option } = fetchAction({
            type: 'FETCH_PAUSE_CHANNEL',
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

async function fetchChannelOwnedByUser(id) {
    try {
        const { url, option } = await fetchAction({
            type: 'FETCH_CHANNEL_BY_USER',
            payload: id,
        });
        const { status, data } = await getFetchDataV2(url, option);
        return { status, data };
    } catch (err) {
        throw new Error(err);
    }
}
export {
    fetchCreateChannel,
    fetchUpdateChannel,
    fetchOpenChannel,
    fetchPauseChannel,
    fetchCloseChannel,
    fetchAuthChannel,
    fetchChannelOwnedByUser,
};
