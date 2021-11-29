export default function userAuthReducer(userInfo, { type, payload }) {
    switch (type) {
        case 'SIGN_IN_SUCCESS':
            return { user: payload.user, isSignIn: true };
        case 'SIGN_IN_ERROR':
        case 'SIGN_OUT':
            return { isSignIn: false };
        case 'CHANGE_NICKNAME':
            return { ...userInfo, user: payload.user };
        default:
            return '';
    }
}
