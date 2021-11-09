import React, { useEffect } from 'react';
import io from 'socket.io-client';

const BASE_URL = 'http://localhost:5000/';

const SocketTest = () => {
    const chatSocket = io(BASE_URL);
    useEffect(() => {
        console.log('socket test');
        chatSocket.on('connect', () => {
            chatSocket.emit('join', { roomId: 'some random key' });
            chatSocket.on('after-join', msg => console.log(msg));
            chatSocket.emit('greeting-from-client', 'Hello Server');
            chatSocket.on('greeting-from-server', msg => console.log(msg));
        });
    }, []);
    return <></>;
};

export default SocketTest;
