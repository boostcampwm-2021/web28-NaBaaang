import STATUS from '@/lib/constant/statusCode.js';
import jwtUtil from '@/lib/util/jwtUtil.js';
import authService from './auth.service.js';
import requestHandler from '@/lib/util/requestHandler.js';
import ClientError from '@/lib/error/ClientError.js';
import { CLIENT_ERROR_CODE } from '@/lib/error/constant/ErrorCode.js';

const { INVALID_PARAMETERS, INVALID_TOKEN } = CLIENT_ERROR_CODE;

const login = async (req, res, next) => {
    try {
        const { code } = req.body;
        if (!code) {
            next(
                new ClientError(INVALID_PARAMETERS, {
                    ...code,
                }),
            );
            return;
        }

        const { user, isCreated, accessToken, refreshToken } =
            await authService.loginGoogle(code);

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
