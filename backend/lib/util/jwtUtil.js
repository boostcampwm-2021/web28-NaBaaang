import jwt from 'jsonwebtoken';
import userDAO from '../../routes/api/user/user.dao.js';

const JWT_SECRET = 'jwt-secret-key';
const sign = user => {
    const payload = {
        id: user.id,
        nickname: user.nickname,
        imageUrl: user.image_url,
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '5s' });
};

const verify = token => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return {
            isValid: true,
            decoded,
        };
    } catch (err) {
        return {
            isValid: false,
            err: err.message,
        };
    }
};

const refresh = () => {
    return jwt.sign({}, JWT_SECRET, { expiresIn: '14d' });
};

const refreshVerify = async (token, userId) => {
    try {
        const data = await userDAO.getRefreshToken(userId);
        if (token === data) {
            try {
                jwt.verify(token, JWT_SECRET);
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
};

const decode = token => {
    return jwt.decode(token);
};

const decodeAccessToken = headers => {
    const accessToken = headers.authorization.split('Bearer ')[1];
    return decode(accessToken);
};

export default {
    sign,
    verify,
    refresh,
    refreshVerify,
    decode,
    decodeAccessToken,
};
