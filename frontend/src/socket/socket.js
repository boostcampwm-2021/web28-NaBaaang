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

// const joinChannel = ({ channelId, auth }) => {
//     Socket.emit('join', { channelId, auth });
// };

// const leaveChannel = () => {
//     Socket.emit('leave');
// };

// const endChannel = () => {
//     Socket.emit('noticeChannelEnded', '방송을 종료합니다');
// };

// const channelEnded = ({ setAlertModal }) => {
//     Socket.on('noticeChannelEnded', () => {
//         setAlertModal(true);
//         leaveChannel();
//     });
// };

// const sendMessage = message => {
//     Socket.emit('chat', message);
// };

// Socket.on('join', msg => console.log(msg));
// Socket.on('leave', msg => console.log(msg));

// export default {
//     Socket,
//     joinChannel,
//     leaveChannel,
//     endChannel,
//     channelEnded,
//     sendMessage,
// };
