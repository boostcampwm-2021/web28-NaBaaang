import io from 'socket.io-client';

const BASE_URL = process.env.REACT_APP_SOCKET_HOST;

export const Socket = io(`${BASE_URL}`);
Socket.connect();

const joinChannel = ({ channelId, auth }) => {
    Socket.emit('join', { channelId, auth });
};

const leaveChannel = () => {
    Socket.emit('leave');
};

const endChannel = () => {
    Socket.emit('noticeChannelEnded', '방송을 종료합니다');
};

const channelEnded = ({ setAlertModal }) => {
    Socket.on('noticeChannelEnded', () => {
        setAlertModal(true);
        leaveChannel();
    });
};

const sendMessage = message => {
    Socket.emit('chat', message);
};

// const saveMessageToBuffer = handler => {
//     Socket.on('chat', handler);
// };

Socket.on('join', msg => console.log(msg));
Socket.on('leave', msg => console.log(msg));

export default {
    Socket,
    joinChannel,
    leaveChannel,
    endChannel,
    channelEnded,
    sendMessage,
};
