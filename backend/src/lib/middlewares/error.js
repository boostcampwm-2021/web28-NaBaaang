export const errorMiddleware = (err, req, res, next) => {
    res.status(err.status).json(err.toObject());
};
