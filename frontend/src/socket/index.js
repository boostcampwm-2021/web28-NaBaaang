import io from 'socket.io-client';

require('dotenv').config();

const BASE_URL = process.env.REACT_APP_SOCKET_HOST;

export const Socket = io(`${BASE_URL}`);
Socket.connect();

const joinChannel = ({ channelId, auth }) => {
    Socket.emit('join', { channelId, auth });
};

const leaveChannel = () => {
    Socket.emit('leave');
};

Socket.on('join', msg => console.log(msg));

Socket.on('disconnect', () => {
    Socket.removeAllListeners();
});

export default { Socket, joinChannel, leaveChannel };
