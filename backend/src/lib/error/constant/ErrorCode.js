import ErrorSpec from '../ErrorSpec';

const CLEINT_ERROR_SPEC = Object.freeze({
    INVALID_PARAMETERS: {
        status: 404,
        code: 4000,
        name: 'INVALID_PARAMERTES',
        description: '요청 parameter가 유효하지 않습니다.',
    },
    INVALID_TOKEN: {
        status: 401,
        code: 4001,
        name: 'INVALID_TOKEN',
        description: 'TOKEN이 유효하지 않습니다.',
    },
    NOT_FOUND_USER: {
        status: 404,
        code: 4002,
        name: 'NOT_FOUND_USER',
        description: '해당 사용자를 찾을 수 없습니다.',
    },
    USER_NOT_CHANNEL_OWNER: {
        status: 401,
        code: 4003,
        name: 'USER_NOT_CHANNEL_OWNER',
        description: '해당 방송의 소유자가 아닙니다.',
    },
    NOT_FOUND_REFRESS_TOKEN: {
        status: 401,
        code: 4004,
        name: 'NOT_FOUND_REFRESS_TOKEN',
        description: '해당 사용자의 Refresh token을 찾을 수 없습니다.',
    },
});

const SERVER_ERROR_SPEC = Object.freeze({
    INTERNAL_SERVER_ERROR: {
        status: 500,
        code: 5000,
        name: 'INTERNAL_SERVER_ERROR',
        description: '내부 서버 오류',
    },
    DATA_ACCESS_ERROR: {
        status: 500,
        code: 5001,
        name: 'DATA_ACCESS_ERROR',
        description: 'DATA ACCESS ERROR',
    },
    SEQUELIZE_CONNECTION_REFURED_ERROR: {
        status: 500,
        code: 5001,
        name: 'SEQUELIZE_CONNECTION_REFURED_ERROR',
        description: 'SequelizeConnectionRefusedError',
    },
    GOOGLE_OAUTH_AUTHENTICATION_ERROR: {
        status: 500,
        code: 5002,
        name: 'GOOGLE_OAUTH_AUTHENTICATION_ERROR',
        description: 'OAuth 구글 인증 오류',
    },
    GOOGLE_OAUTH_RESOURCE_SERVER_ERROR: {
        status: 500,
        code: 5003,
        name: 'GOOGLE_OAUTH_RESOURCE_SERVER_ERROR',
        description: 'OAuth 구글 Resource 서버 오류',
    },
});

const CLIENT_ERROR_CODE = Object.freeze(
    Object.keys(CLEINT_ERROR_SPEC).reduce((obj, key) => {
        obj[key] = new ErrorSpec(CLEINT_ERROR_SPEC[key]);
        return obj;
    }, {}),
);

const SERVER_ERROR_CODE = Object.freeze(
    Object.keys(SERVER_ERROR_SPEC).reduce((obj, key) => {
        obj[key] = new ErrorSpec(SERVER_ERROR_SPEC[key]);
        return obj;
    }, {}),
);

export { CLIENT_ERROR_CODE, SERVER_ERROR_CODE };
