import { API_URL, MEDIA_URL } from '@/constants/url';

const fetchTemplate = (method, payload = '') => {
    const template = {
        option: {
            method,
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        },
    };
    if (method === 'POST') {
        return {
            option: { ...template.option, body: JSON.stringify(payload) },
        };
    }
    return template;
};

const actionTypeInfo = payload => {
    return {
        FETCH_CREATE_CHANNEL: {
            url: `${API_URL}/api/channels`,
            ...fetchTemplate('POST', payload),
        },
        FETCH_GET_CHANNEL: {
            url: `${API_URL}/api/channels/${payload}`,
            ...fetchTemplate('GET'),
        },
        FETCH_GET_LIVE_CHANNELS: {
            url: `${API_URL}/api/channels`,
            ...fetchTemplate('GET'),
        },
        FETCH_OPEN_CHANNEL: {
            url: `${API_URL}/api/channels/${payload}/open`,
            ...fetchTemplate('PATCH'),
        },
        FETCH_CLOSE_CHANNEL: {
            url: `${API_URL}/api/channels/${payload}/close`,
            ...fetchTemplate('PATCH'),
        },
        FETCH_READY_MEDIA: {
            url: `${MEDIA_URL}/${payload}.m3u8`,
            option: {
                method: 'HEAD',
            },
        },
    };
};

export default function fetchAction({ type, payload }) {
    const actionType = actionTypeInfo(payload);
    return actionType[type];
}
