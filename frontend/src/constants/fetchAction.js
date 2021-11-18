import { API_URL, MEDIA_URL, GOOGLE_AUTH_REDIRECT_URL } from '@/constants/url';

const fetchTemplate = (method, payload = '', header = '') => {
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        ...header,
    };
    const template = {
        option: {
            method,
            headers,
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
            ...fetchTemplate('POST', payload, {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
                refresh: `${window.localStorage.refreshToken}`,
            }),
        },
        FETCH_WATCH_CHANNEL: {
            url: `${API_URL}/api/channels/${payload}/watch`,
            ...fetchTemplate(
                'POST',
                {},
                {
                    Authorization: `Bearer ${window.localStorage.accessToken}`,
                    refresh: `${window.localStorage.refreshToken}`,
                },
            ),
        },
        FETCH_CHANNEL_AUTHENTICATE: {
            url: `${API_URL}/api/channels/${payload}/authenticate`,
            ...fetchTemplate(
                'GET',
                {},
                {
                    Authorization: `Bearer ${window.localStorage.accessToken}`,
                    refresh: `${window.localStorage.refreshToken}`,
                },
            ),
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
        FETCH_GET_GOOGLE_CODE: {
            url: GOOGLE_AUTH_REDIRECT_URL,
            option: {
                method: 'GET',
            },
        },
        FETCH_SIGN_IN_GOOGLE: {
            url: `${API_URL}/api/auth/login`,
            ...fetchTemplate('POST', payload),
        },
        FETCH_AUTH_TOKEN_VALIDATION: {
            url: `${API_URL}/api/auth/token/validation`,
            ...fetchTemplate('GET', payload, {
                Authorization: `Bearer ${window.localStorage.accessToken}`,
                refresh: `${window.localStorage.refreshToken}`,
            }),
        },
    };
};

export default function fetchAction({ type, payload }) {
    const actionType = actionTypeInfo(payload);
    return actionType[type];
}
