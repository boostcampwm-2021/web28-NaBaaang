import STATUS from '@/constants/statusCode';

async function getFetchData(url, option) {
    const res = await fetch(url, option);
    const json = await res.json();
    return json;
}

async function getFetchDataV2(url, option) {
    const res = await fetch(url, option);
    const { status } = res;
    const data = status === STATUS.NO_CONTENT ? {} : await res.json();
    return { status, data };
}

export { getFetchData, getFetchDataV2 };
