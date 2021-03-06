import jwtUtil from './jwtUtil.js';

const getTokensFromHeader = headers => {
    return {
        accessToken: headers.authorization.split('Bearer ')[1],
        refreshToken: headers.refresh,
    };
};

const updateAccessToken = (headers, decoded) => {
    const newAccessToken = jwtUtil.sign(decoded);
    headers.authorization = `Bearer ${newAccessToken}`;
};

const getUserFromHeader = headers => {
    const { accessToken } = getTokensFromHeader(headers);
    return jwtUtil.decode(accessToken);
};

const setRole = (req, role) => {
    req.params = { ...req.params, role };
};

export default {
    getTokensFromHeader,
    updateAccessToken,
    getUserFromHeader,
    setRole,
};
