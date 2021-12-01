async function getFetchData(url, option) {
    const res = await fetch(url, option);
    const { status, headers } = res;
    let data;
    try {
        data = await res.json();
    } catch (err) {
        data = {};
    }
    return { status, data, headers };
}

export { getFetchData };
