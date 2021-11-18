import STATUS from '../../../lib/util/statusCode.js';
import userDAO from '../user/user.dao.js';
import jwtUtil from '../../../lib/util/jwtUtil.js';
import authService from './auth.service.js';
import requestHandler from '../../../lib/util/requestHandler.js';

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

const authenticate = async (req, res, next) => {
    if (authService.isAuthenticate(req.headers)) {
        const user = requestHandler.getUserFromHeader(req.headers);
        req.body.userId = user.id;
        next();
        return;
    } else {
        res.status(STATUS.UNAUTHORIZED).json({ error: 'TOKEN IS INVALID' });
        return;
    }
};

const getAuthValidation = async (req, res) => {
    if (authService.isAuthenticate(req.headers)) {
        const { accessToken } = requestHandler.getTokensFromHeader(req.headers);
        const decoded = jwtUtil.decode(accessToken);
        res.status(STATUS.OK).json({ accessToken, decoded });
        return;
    } else {
        res.status(STATUS.UNAUTHORIZED).json({ error: 'TOKEN IS INVALID' });
        return;
    }
};

export default {
    login,
    authenticate,
    getAuthValidation,
};
