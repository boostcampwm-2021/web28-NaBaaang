import { EVENT_TYPE } from '@/constants/socketEventType';

const chat = socket => {
    const sendMessage = message => {
        socket.emit(EVENT_TYPE.SEND_MESSAGE, message);
    };

    const handleReceivedMessage = handler => {
        socket.on(EVENT_TYPE.RECEIVE_MESSAGE, handler);
    };

    const clearChatEvents = () => {
        socket.off(EVENT_TYPE.SEND_MESSAGE);
    };

    return { sendMessage, handleReceivedMessage, clearChatEvents };
};

export default chat;
