import ClientError from "../error/ClientError";
import { CLIENT_ERROR_CODE } from "../error/constant/ErrorCode";

const checkUndefinedParameters = params => {
    const undefinedParams = Object.keys(params).filter(
        key => params[key] === undefined,
    );
    return [undefinedParams.length === 0, undefinedParams];
};

const validateParameters = (obj, next) => {
    const [isValidParams, undefinedParams] = checkUndefinedParameters(obj);
    if (!isValidParams) {
        next(
            new ClientError(CLIENT_ERROR_CODE.INVALID_PARAMETERS, {
                undefinedParams,
            }),
        );
        return isValidParams;
    }
    return isValidParams;
};

export default { validateParameters, checkUndefinedParameters };
