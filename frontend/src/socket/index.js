import io from 'socket.io-client';

require('dotenv').config();

const BASE_URL = process.env.REACT_APP_SOCKET_HOST;

const createChatSocket = () => {
    const chatSocket = io(`${BASE_URL}/chat`);

    chatSocket.on('connect', () => {
        chatSocket.on('join', msg => console.log(msg));
    });

    chatSocket.on('disconnect', () => {
        chatSocket.removeAllListeners();
    });
    return chatSocket;
};

export const ChatSocket = createChatSocket();
