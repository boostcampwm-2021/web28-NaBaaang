import {
    API_URL,
    MEDIA_URL,
    GOOGLE_AUTH_REDIRECT_URL
} from '@/constants/url';
import {
    RequestBuilder
} from './fetchOptionTemplate';

const actionTypeInfo = {
    FETCH_CREATE_CHANNEL(payload) {
        const data = new RequestBuilder()
            .url(`${API_URL}/api/channels`)
            .method('POST')
            .authToken()
            .body(payload)
            .build();
        return data;
    },

    FETCH_UPDATE_CHANNEL(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload.id}`)
            .method('PATCH')
            .authToken()
            .body(payload)
            .build();
    },

    FETCH_UPDATE_NICKNAME(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/users/${payload.id}`)
            .method('PATCH')
            .body(payload.nickname)
            .build();
    },

    FETCH_WATCH_CHANNEL(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/watch`)
            .method('POST')
            .authToken()
            .body({})
            .build();
    },
    FETCH_CHANNEL_AUTHENTICATE(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/authenticate`)
            .method('GET')
            .authToken()
            .build();
    },
    FETCH_GET_CHANNEL(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}`)
            .method('GET')
            .build();
    },
    FETCH_CHANNEL_BY_USER(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/users/${payload}/channels`)
            .method('GET')
            .build();
    },
    FETCH_GET_LIVE_CHANNELS() {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels`)
            .method('GET')
            .build();
    },
    FETCH_OPEN_CHANNEL(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/open`)
            .method('PATCH')
            .build();
    },
    FETCH_PAUSE_CHANNEL(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/pause`)
            .method('PATCH')
            .build();
    },
    FETCH_CLOSE_CHANNEL(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/close`)
            .method('PATCH')
            .build();
    },
    FETCH_READY_MEDIA(payload) {
        return new RequestBuilder()
            .url(`${MEDIA_URL}/${payload}.m3u8`)
            .method('HEAD')
            .build();
    },
    FETCH_GET_GOOGLE_CODE() {
        return new RequestBuilder()
            .url(GOOGLE_AUTH_REDIRECT_URL)
            .method('GET')
            .build();
    },
    FETCH_SIGN_IN_GOOGLE(payload) {
        return new RequestBuilder()
            .url(`${API_URL}/api/auth/login`)
            .method('POST')
            .body(payload)
            .build();
    },
    FETCH_AUTH_TOKEN_VALIDATION() {
        return new RequestBuilder()
            .url(`${API_URL}/api/auth/token/validation`)
            .method('GET')
            .authToken()
            .build();
    },
};

export default function fetchAction({
    type,
    payload
}) {
    try {
        const actionType = actionTypeInfo[type](payload);
        return actionType;
    } catch (err) {
        throw new Error(err);
    }
}