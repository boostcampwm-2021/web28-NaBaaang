const existUndefinedInParameters = (...args) => {
    return args.some(arg => {
        return arg === undefined;
    });
};

export { existUndefinedInParameters };
