import axios from "axios";
import STATUS from "../constants/statusCode.js";
import EVENT from "../constants/socketEvents.js";

const API_SERVER = process.env.API_SERVER;

const chat = (io, socket) => {
    const sendChatMessage = async (message) => {
        const { chatId } = socket;
        const { userId: senderId, content } = message;
        const storeStatus = await saveChatMessage(chatId, senderId, content);
        console.log(message, storeStatus);
        if (storeStatus) {
            socket.to(socket.channelId).emit(EVENT.SEND_CHAT, { ...message, status: true });
        } else {
            socket.emit(EVENT.SEND_CHAT, { ...message, status: false });
        }
    };

    const saveChatMessage = async (chatId, senderId, message) => {
        try {
            const response = await axios.post(`${API_SERVER}/api/chats/${chatId}/message`, {
                senderId,
                content: message,
            });
            if (response.status === STATUS.CREATED) return true;
            else return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    socket.on(EVENT.SEND_CHAT, sendChatMessage);
};

export default chat;
