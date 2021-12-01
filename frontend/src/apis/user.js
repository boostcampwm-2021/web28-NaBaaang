import fetchAction from '@/constants/fetchAction';
import { getFetchData } from '@/util/fetchUtil';

async function fetchUpdateNickname(payload) {
    const { url, option } = fetchAction({
        type: 'FETCH_UPDATE_NICKNAME',
        payload,
    });
    const { status, data } = await getFetchData(url, option);
    return { status, data };
}

export { fetchUpdateNickname };
