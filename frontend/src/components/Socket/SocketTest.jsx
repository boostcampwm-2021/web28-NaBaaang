import React, { useEffect } from 'react';

import { ChatSocket } from '@/socket';

const SocketTest = () => {
    useEffect(() => {
        console.log('socket test');
        ChatSocket.emit('join', { roomId: 'some random key' });
        ChatSocket.emit('chat', { message: 'Hello Server' });
    }, []);
    return <></>;
};

export default SocketTest;
