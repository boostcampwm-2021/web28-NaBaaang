import io from 'socket.io-client';
import channel from './channel';
import chat from './chat';

const BASE_URL = process.env.REACT_APP_SOCKET_HOST;

const Socket = () => {
    const socket = io(`${BASE_URL}`);
    socket.connect();
    return {
        channel: channel(socket),
        chat: chat(socket),
    };
};

export default Socket();


