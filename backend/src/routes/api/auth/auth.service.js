import axios from 'axios';

import oauthConfig from '@config/oauth.js';
import userDAO from '@/routes/api/user/user.dao.js';
import jwtUtil from '@/lib/util/jwtUtil.js';
import requestHandler from '@/lib/util/requestHandler.js';
import ServerError from '@/lib/error/ServerError';
import { SERVER_ERROR_CODE } from '@/lib/error/constant/ErrorCode';
const env = process.env.NODE_ENV || 'development';
const config = oauthConfig[env];

const {
    GOOGLE_OAUTH_AUTHENTICATION_ERROR,
    GOOGLE_OAUTH_RESOURCE_SERVER_ERROR,
} = SERVER_ERROR_CODE;

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
            data,
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
        throw new ServerError(
            GOOGLE_OAUTH_RESOURCE_SERVER_ERROR,
            error.message,
        );
    }
};

const exchangeCodeForToken = async code => {
    try {
        const { data } = await fetchGoogleAccessToken(code);
        return data;
    } catch (error) {
        throw new ServerError(GOOGLE_OAUTH_AUTHENTICATION_ERROR, error.message);
    }
};

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

const loginGoogle = async code => {
    try {
        const data = await exchangeCodeForToken(code);
        const { access_token: googleToken } = data;
        const result = await fetchGoogleInfoByAccessToken(googleToken);
        const [user, isCreated] = await userDAO.getOrCreate(result);
        const accessToken = jwtUtil.sign(user);
        const refreshToken = jwtUtil.refresh();
        await userDAO.updateRefreshToken(user.id, refreshToken);
        return { user, isCreated, accessToken, refreshToken };
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default {
    exchangeCodeForToken,
    fetchGoogleInfoByAccessToken,
    isAuthenticate,
    loginGoogle,
};
