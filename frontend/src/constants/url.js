const API_URL =
    process.env.REACT_APP_API_HOST || process.env.STORYBOOK_REACT_APP_API_HOST;

const SOCKET_URL =
    process.env.REACT_APP_SOCKET_HOST ||
    process.env.STORYBOOK_REACT_APP_SOCKET_HOST;

const MEDIA_URL =
    process.env.REACT_APP_MEDIA_HOST ||
    process.env.STORYBOOK_REACT_APP_MEDIA_HOST;

export { API_URL, SOCKET_URL, MEDIA_URL };
