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

const isFunction = fn => fn && {}.toString.call(fn) === '[object Function]';

const isString = str =>
    Object.prototype.toString.call(str) === '[object String]';

const transMarginProp = v => (!isString(v) ? `${v}rem` : v);

export {
    replaceBlankAndNewLine,
    isTokenExist,
    setItemToLocalStorage,
    removeItemFromLocalStorage,
    isFunction,
    isString,
    transMarginProp,
};
