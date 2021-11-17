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
    if (authService.isAuthenticate(req.headers)) {
        const accessToken = req.headers.authorization.split('Bearer ')[1];
        const decoded = jwtUtil.decode(accessToken);
        req.body.streamer_id = decoded.id;
        next();
        return;
    } else {
        res.status(STATUS.UNAUTHORIZED).send({ error: 'TOKEN IS INVALID' });
        return;
    }
};

const getAuthValidation = async (req, res) => {
    try {
        const accessToken = req.headers.authorization.split('Bearer ')[1];
        const user = jwtUtil.verify(accessToken);
        if (!user.ok) {
            throw new Error(user.message);
        }
        res.status(STATUS.OK).json({ accessToken, user });
    } catch (error) {
        res.status(STATUS.UNAUTHORIZED).json({ error });
    }
};

export default {
    login,
    auth,
    getAuthValidation,
};
