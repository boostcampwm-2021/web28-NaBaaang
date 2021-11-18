import axios from 'axios';

import oauthConfig from '../../../config/oauth.js';
import jwtUtil from '../../../lib/util/jwtUtil.js';
import requestHandler from '../../../lib/util/requestHandler.js';
const env = process.env.NODE_ENV || 'development';
const config = oauthConfig[env];

const fetchGoogleAccessToken = async code => {
    const url = 'https://www.googleapis.com/oauth2/v4/token';
    try {
        const data = {
            code,
            client_id: config.clientID,
            client_secret: config.secretKey,
            grant_type: 'authorization_code',
            redirect_uri: config.redirectUri,
        };
        const result = await axios({
            url,
            method: 'post',
            headers: {},
            data: {
                code,
                client_id: config.clientID,
                client_secret: config.secretKey,
                grant_type: 'authorization_code',
                redirect_uri: config.redirectUri,
            },
        });
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const fetchGoogleInfoByAccessToken = async accessToken => {
    try {
        const url = `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`;
        const { data } = await axios({
            url,
            method: 'get',
        });
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

const exchangeCodeForToken = async code => {
    try {
        const { data } = await fetchGoogleAccessToken(code);
        return data;
    } catch (error) {
        throw new Error(error);
    }
};

const isValidAccessToken = accessToken => {};
const isAuthenticate = headers => {
    if (!headers.authorization || !headers.refresh) return false;

    const { accessToken, refreshToken } =
        requestHandler.getTokensFromHeader(headers);
    const { isValid: isValidAccessToken, decoded } =
        jwtUtil.verify(accessToken);

    if (!decoded) return false;

    if (isValidAccessToken) {
        requestHandler.updateAccessToken(headers, decoded);
        return true;
    }

    const isValidRefreshToken = jwtUtil.refreshVerify(refreshToken, decoded.id);
    if (!isValidRefreshToken) return false;

    requestHandler.updateAccessToken(headers, decoded);
    return true;
};

export default {
    exchangeCodeForToken,
    fetchGoogleInfoByAccessToken,
    isAuthenticate,
};
