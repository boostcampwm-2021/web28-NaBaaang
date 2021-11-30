import fetchAction from '@/constants/fetchAction';
import { getFetchDataV2 } from './fetchUtill';

async function fetchUpdateNickname(payload) {
    const { url, option } = fetchAction({
        type: 'FETCH_UPDATE_NICKNAME',
        payload,
    });
    const { status, data } = await getFetchDataV2(url, option);
    return { status, data };
}

export { fetchUpdateNickname };
