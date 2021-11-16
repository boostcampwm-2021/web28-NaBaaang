import { API_URL, MEDIA_URL } from '@/constants/url';
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from './oauth';

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
                Authorization: `Bearer ${window.localStorage.token}`,
                refresh: `${window.localStorage.refresh}`,
            }),
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
            url:
                `https://accounts.google.com/o/oauth2/v2/auth?` +
                `scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&s_type=offline&` +
                `response_type=code&` +
                `state=state_parameter_passthrough_value&` +
                `http://localhost:3000/auth/google/callback&` +
                `redirect_uri=${GOOGLE_REDIRECT_URI}&` +
                `client_id=${GOOGLE_CLIENT_ID}`,
            option: {
                method: 'GET',
            },
        },
        FETCH_SIGN_IN_GOOGLE: {
            url: `${API_URL}/api/auth/login`,
            ...fetchTemplate('POST', payload),
        },
    };
};

export default function fetchAction({ type, payload }) {
    const actionType = actionTypeInfo(payload);
    return actionType[type];
}
