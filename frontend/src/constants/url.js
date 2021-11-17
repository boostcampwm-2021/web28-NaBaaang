import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from '@/constants/oauth';
import { replaceBlankAndNewLine } from '@/util';

const API_URL =
    process.env.REACT_APP_API_HOST || process.env.STORYBOOK_REACT_APP_API_HOST;

const SOCKET_URL =
    process.env.REACT_APP_SOCKET_HOST ||
    process.env.STORYBOOK_REACT_APP_SOCKET_HOST;

const MEDIA_URL =
    process.env.REACT_APP_MEDIA_HOST ||
    process.env.STORYBOOK_REACT_APP_MEDIA_HOST;

const GOOGLE_AUTH_REDIRECT_URL = replaceBlankAndNewLine(`
    https://accounts.google.com/o/oauth2/v2/auth?
    scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&s_type=offline&
    response_type=code&
    state=state_parameter_passthrough_value&
    http://localhost:3000/auth/google/callback&
    redirect_uri=${GOOGLE_REDIRECT_URI}&
    client_id=${GOOGLE_CLIENT_ID}
`);

const GOOGLE_AUTH_RESOURCE_SERVER_URL = replaceBlankAndNewLine(`
    https://accounts.google.com/o/oauth2/v2/auth?
    scope=profile&
     access_type=offline&
    include_granted_scopes=true&
    response_type=code&
    state=state_parameter_passthrough_value&
    redirect_uri=${GOOGLE_REDIRECT_URI}&
    client_id=${GOOGLE_CLIENT_ID}
`)


export { API_URL, SOCKET_URL, MEDIA_URL, GOOGLE_AUTH_REDIRECT_URL,GOOGLE_AUTH_RESOURCE_SERVER_URL };
