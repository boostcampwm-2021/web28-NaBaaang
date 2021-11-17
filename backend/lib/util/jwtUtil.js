import jwt from 'jsonwebtoken';
import userDAO from '../../routes/api/user/user.dao.js';

const JWT_SECRET = 'jwt-secret-key';
const sign = user => {
    const payload = {
        id: user.id,
        nickname: user.nickname,
        imageUrl: user.image_url,
    };

    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

const verify = token => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return {
            ok: true,
            id: decoded.id,
            nickname: decoded.nickname,
            imageUrl: decoded.image_url,
        };
    } catch (err) {
        return {
            ok: false,
            message: err.message,
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

export default { sign, verify, refresh, refreshVerify, decode };
