import React, { useEffect } from 'react';
import io from 'socket.io-client';

require('dotenv').config();

const BASE_URL = process.env.REACT_APP_SOCKET_HOST;

const createChatSocket = () => {
    const chatSocket = io(`${BASE_URL}/chat`);

    chatSocket.on('connect', () => {
        // chatSocket.emit('join', { roomId: 'some random key' });
        chatSocket.on('join', msg => console.log(msg));
        // chatSocket.emit('chat', { message: 'Hello Server' });
        chatSocket.on('chat', msg => console.log(msg));
    });

    chatSocket.on('disconnect', () => {
        chatSocket.removeAllListeners();
    });
    return chatSocket;
};

const SocketTest = () => {
    const chatSocket = createChatSocket();
    useEffect(() => {
        console.log('socket test');
        chatSocket.on('connect', () => {
            chatSocket.emit('join', { roomId: 'some random key' });
            chatSocket.emit('chat', { message: 'Hello Server' });
        });
    }, []);
    return <></>;
};

export default SocketTest;
