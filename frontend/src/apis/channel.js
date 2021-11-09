import { API_URL } from '@/constants/url';

async function fetchCreateChannel(payload) {
    const url = `${API_URL}/api/channels`;
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(payload),
    };

    try {
        const res = await fetch(url, option);
        const json = await res.json();
        return json;
    } catch (err) {
        throw new Error(err);
    }
}

async function fetchGetChannel(id) {
    const url = `${API_URL}/api/channels/${id}`;
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    };
    try {
        const res = await fetch(url, option);
        const json = await res.json();
        return json;
    } catch (err) {
        throw new Error(err);
    }
}

export { fetchCreateChannel, fetchGetChannel };
