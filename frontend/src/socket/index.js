import io from 'socket.io-client';

require('dotenv').config();

const BASE_URL = process.env.REACT_APP_SOCKET_HOST;

const ChatSocket = io(`${BASE_URL}`);

ChatSocket.on('connect', () => {
    ChatSocket.on('join', msg => console.log(msg));
});

ChatSocket.on('disconnect', () => {
    ChatSocket.removeAllListeners();
});

export default ChatSocket;
