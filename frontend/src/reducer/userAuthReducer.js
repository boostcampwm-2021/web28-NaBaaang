import { AUTH_TOKEN_LIST } from '@/constants/auth';
import { removeItemFromLocalStorage, setItemToLocalStorage } from '@/util';

export default function userAuthReducer(userInfo, { type, payload }) {
    switch (type) {
        case 'SIGN_IN_SUCCESS':
            setItemToLocalStorage({
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken,
            });
            return { user: payload.user, isSignIn: true };
        case 'SIGN_IN_ERROR':
        case 'SIGN_OUT':
            removeItemFromLocalStorage(AUTH_TOKEN_LIST);
            return { isSignIn: false };
        case 'CHANGE_NICKNAME':
            setItemToLocalStorage({
                accessToken: payload.accessToken,
                refreshToken: payload.refreshToken,
            });
            return { ...userInfo, user: payload.user };
        default:
            return {};
    }
}
