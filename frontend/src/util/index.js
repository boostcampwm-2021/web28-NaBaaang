const replaceBlankAndNewLine = s => s.replace(/[\n|\s]/g, '');

const isTokenExist = keyList => {
    return keyList.every(k => window.localStorage.getItem(k));
};

const setItemToLocalStorage = itemObj => {
    Object.entries(itemObj).forEach(([k, v]) =>
        window.localStorage.setItem(k, v),
    );
};

const removeItemFromLocalStorage = keyList => {
    keyList.forEach(k => window.localStorage.removeItem(k));
};

export {
    replaceBlankAndNewLine,
    isTokenExist,
    setItemToLocalStorage,
    removeItemFromLocalStorage,
};
