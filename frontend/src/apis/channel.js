import fetchAction from '@/constants/fetchAction';
import { getFetchData } from '@/util/fetchUtil';

async function fetchChannelOwnedByUser(id) {
    try {
        const { url, option } = await fetchAction({
            type: 'FETCH_CHANNEL_BY_USER',
            payload: id,
        });
        const { status, data } = await getFetchData(url, option);
        return {
            status,
            data,
        };
    } catch (err) {
        throw new Error(err);
    }
}

export { fetchChannelOwnedByUser };
