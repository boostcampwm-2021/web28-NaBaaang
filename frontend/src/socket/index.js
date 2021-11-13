import io from 'socket.io-client';

require('dotenv').config();

const BASE_URL = process.env.REACT_APP_SOCKET_HOST;

export const ChatSocket = io(`${BASE_URL}/chat`);
ChatSocket.connect();

const joinChannel = channelId => {
    ChatSocket.emit('join', { channelId });
};

ChatSocket.on('join', msg => console.log(msg));

ChatSocket.on('disconnect', () => {
    ChatSocket.removeAllListeners();
});

export default { ChatSocket, joinChannel };
