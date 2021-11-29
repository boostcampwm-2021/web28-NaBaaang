import { v1 } from 'uuid';

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

const makeChatMessage = ({ type, user, content }) => {
    const { id: userID, nickname } = user;
    return {
        id: v1(),
        type,
        userID,
        nickname,
        content,
    };
};

export {
    replaceBlankAndNewLine,
    isTokenExist,
    setItemToLocalStorage,
    removeItemFromLocalStorage,
    isFunction,
    isString,
    transMarginProp,
    makeChatMessage,
};
