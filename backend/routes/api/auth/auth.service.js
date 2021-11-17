import axios from 'axios';

import oauthConfig from '../../../config/oauth.js';
import jwtUtil from '../../../lib/util/jwtUtil.js';
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
        console.log(data);
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
        console.log(error);
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

const isAuthenticate = headers => {
    if (!headers.authorization || !headers.refresh) {
        return false;
    }
    const accessToken = headers.authorization.split('Bearer ')[1];
    const refreshToken = headers.refresh;
    const tokenResult = jwtUtil.verify(accessToken);
    const decoded = jwtUtil.decode(accessToken);

    if (decoded === null) return false;

    if (tokenResult.ok) {
        const newAccessToken = jwtUtil.sign(decoded);
        headers.authorization = `Bearer ${newAccessToken}`;
        return true;
    }

    const refreshResult = jwtUtil.refreshVerify(refreshToken, decoded.id);

    if (!refreshResult.ok) {
        return false;
    }

    const newAccessToken = jwtUtil.sign(decoded);
    headers.authorization = `Bearer ${newAccessToken}`;
    return true;
};

export default {
    exchangeCodeForToken,
    fetchGoogleInfoByAccessToken,
    isAuthenticate,
};
