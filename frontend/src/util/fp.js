const go = (...fs) => fs.reduce((acc, fn) => fn(acc));
const pipe =
    (...fs) =>
    arg =>
        fs.reduce((acc, fn) => fn(acc), arg);

export { go, pipe };
