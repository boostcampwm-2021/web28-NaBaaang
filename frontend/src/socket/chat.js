import { EVENT_TYPE } from '@/constants/socketEventType';

const chat = socket => {
    const sendMessage = message => {
        socket.emit(EVENT_TYPE.SEND_MESSAGE, message);
    };

    const clearChatEvents = () => {
        socket.off(EVENT_TYPE.SEND_MESSAGE);
    };

    return { sendMessage, clearChatEvents };
};

export default chat;
