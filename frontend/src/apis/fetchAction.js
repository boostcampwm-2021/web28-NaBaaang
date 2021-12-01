import { API_URL, MEDIA_URL } from '@/constants/url';
import { getFetchData } from '@/util/fetchUtil';
import { RequestBuilder } from '../constants/fetchOptionTemplate';

const callAPI = async ({ url, option }) => {
    try {
        const { status, data, headers } = await getFetchData(url, option);
        return {
            status,
            data,
            headers,
        };
    } catch (error) {
        console.log(error);
        // TODO: Santry logger 달기
        throw new Error(error);
    }
};

const actionTypeInfo = {
    async FETCH_CREATE_CHANNEL(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/channels`)
            .method('POST')
            .authToken()
            .body(payload)
            .build();
        const response = await callAPI(request);
        return response;
    },

    async FETCH_UPDATE_CHANNEL(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload.id}`)
            .method('PATCH')
            .authToken()
            .body(payload)
            .build();
        const response = await callAPI(request);
        return response;
    },

    async FETCH_UPDATE_NICKNAME(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/users/${payload.id}`)
            .method('PATCH')
            .body(payload.nickname)
            .build();
        const response = await callAPI(request);
        return response;
    },

    async FETCH_GET_CHANNEL(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}`)
            .method('GET')
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_CHANNEL_BY_USER(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/users/${payload}/channels`)
            .method('GET')
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_GET_LIVE_CHANNELS() {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/channels`)
            .method('GET')
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_OPEN_CHANNEL(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/open`)
            .method('PATCH')
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_CLOSE_CHANNEL(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/close`)
            .method('PATCH')
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_READY_MEDIA(payload) {
        const request = new RequestBuilder()
            .url(`${MEDIA_URL}/${payload}.m3u8`)
            .method('HEAD')
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_CHANNEL_AUTHENTICATE(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/channels/${payload}/authenticate`)
            .method('GET')
            .authToken()
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_SIGN_IN_GOOGLE(payload) {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/auth/login`)
            .method('POST')
            .body(payload)
            .build();
        const response = await callAPI(request);
        return response;
    },
    async FETCH_AUTH_TOKEN_VALIDATION() {
        const request = new RequestBuilder()
            .url(`${API_URL}/api/auth/token/validation`)
            .method('GET')
            .authToken()
            .build();
        const response = await callAPI(request);
        return response;
    },
};

async function fetchAction({ type, payload }) {
    try {
        const actionType = await actionTypeInfo[type](payload);
        return actionType;
    } catch (err) {
        throw new Error(err);
    }
}

export default fetchAction;
