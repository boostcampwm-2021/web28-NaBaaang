export function userReducer(user, { type }) {
    switch (type) {
        case 'LOGIN':
            return { ...user, isSignin: true };

        case 'LOGOUT':
            return { ...user, isSignin: false };
        default:
            break;
    }
    return null;
}
