import { EVENT_TYPE } from '@/constants/socketEventType';

const chat = socket => {
    const sendMessage = (channelId, message) => {
        socket.emit(EVENT_TYPE.SEND_MESSAGE, channelId, message);
    };

    const onMessage = handler => {
        socket.on(EVENT_TYPE.RECEIVE_MESSAGE, handler);
    };

    const clearChatEvents = () => {
        socket.off(EVENT_TYPE.SEND_MESSAGE);
    };

    return { sendMessage, onMessage, clearChatEvents };
};

export default chat;
