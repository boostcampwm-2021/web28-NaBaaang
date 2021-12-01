// trim() 사용 이유 : script에서 space 포함해서 읽어 들임.
const NODE_ENV = process.env.NODE_ENV.trim();

function isDevEnv() {
    return NODE_ENV === 'development';
}

export { isDevEnv };
