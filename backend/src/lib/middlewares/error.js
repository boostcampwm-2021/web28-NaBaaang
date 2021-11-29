export const errorHandler = (err, req, res, next) => {
    res.status(err.status).json(err.toObject());
};
