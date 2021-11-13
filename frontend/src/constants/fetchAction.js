import { API_URL, MEDIA_URL } from '@/constants/url';

const fetchTemplate = (method, payload='') => {
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
            ...fetchTemplate('POST', )
        },
        FETCH_GET_CHANNEL: {
            url: `${API_URL}/api/channels/${payload}`,
            method: 'GET',
        },
        FETCH_OPEN_CHANNEL: {
            url: `${API_URL}/api/channels/${payload}/open`,
            method: 'PATCH',
        },
        FETCH_CLOSE_CHANNEL: {
            url: `${API_URL}/api/channels/${payload}/close`,
            method: 'PATCH',
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
    switch (type) {
        case 'FETCH_CREATE_CHANNEL':
            return {
                url: `${API_URL}/api/channels`,
                option: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                    body: JSON.stringify(payload),
                },
            };
        case 'FETCH_GET_CHANNEL':
            return {
                url: `${API_URL}/api/channels/${payload}`,
                option: {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                },
            };
        case 'FETCH_OPEN_CHANNEL':
            return {
                url: `${API_URL}/api/channels/${payload}/open`,
                option: {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                },
            };
        case 'FETCH_CLOSE_CHANNEL':
            return {
                url: `${API_URL}/api/channels/${payload}/close`,
                option: {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                },
            };
        case 'FETCH_READY_MEDIA':
            return {
                url: `${MEDIA_URL}/${payload}.m3u8`,
                option: {
                    method: 'HEAD',
                },
            };
        default:
            return '';
    }
}
