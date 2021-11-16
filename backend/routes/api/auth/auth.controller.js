import STATUS from '../../../lib/util/statusCode.js';
import userDAO from '../user/user.dao.js';
import jwtUtil from '../../../lib/util/jwtUtil.js';
import authService from './auth.service.js';

const login = async (req, res) => {
    try {
        const { code } = req.body;
        const data = await authService.exchangeCodeForToken(code);
        const { access_token: googleToken } = data;
        const result = await authService.fetchGoogleInfoByAccessToken(
            googleToken,
        );
        const [user, isCreated] = await userDAO.getOrCreate(result);
        const accessToken = jwtUtil.sign(user);
        const refreshToken = jwtUtil.refresh();
        await userDAO.updateRefreshToken(user.id, refreshToken);
        res.status(STATUS.ACCEPT).json({
            user,
            accessToken,
            refreshToken,
            isCreated,
        });
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

const auth = async (req, res, next) => {
    // access token or refresh token 없을 경우
    if (!req.headers.authorization || !req.headers.refresh) {
        res.status(STATUS.UNAUTHORIZED).send({
            message: 'No authorized!',
        });
        return;
    }

    const token = req.headers.authorization.split('Bearer ')[1];
    const refreshToken = req.headers.refresh;

    const tokenResult = jwtUtil.verify(token);

    const decoded = jwtUtil.decode(token);

    // access token 유효한 경우
    if (tokenResult.ok) {
        req.body.streamer_id = decoded.id;
        next();
        return;
    }
    // 디코딩 결과 없을 경우
    if (decoded === null) {
        res.status(STATUS.UNAUTHORIZED).send({
            message: 'No authorized!',
        });
        return;
    }
    const refreshResult = jwtUtil.refreshVerify(refreshToken, decoded.id);
    // refresh token 유효하지 않은 경우
    if (!refreshResult.ok) {
        res.status(STATUS.UNAUTHORIZED).send({
            message: 'No authorized!',
        });
        return;
    }

    //refresh token 유효한 경우
    const newAccessToken = sign(decoded);
    req.body.streamer_id = user.id;
    req.accessToken = newAccessToken;
    next();
};

export default {
    login,
    auth,
};
