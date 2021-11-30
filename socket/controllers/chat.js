import axios from "axios";
import STATUS from "../constants/statusCode.js";
import EVENT from "../constants/socketEvents.js";

const API_SERVER = "http://localhost:4000";

const chat = (io, socket) => {
    const sendChatMessage = async (message) => {
        const { chatId } = socket;
        const { userId: senderId, content } = message;
        const { status, data } = await saveChatMessage(chatId, senderId, content);
        if (status === STATUS.CREATED) {
            socket.to(socket.channelId).emit(EVENT.SEND_CHAT, { ...message, status: true });
        } else {
            const { errorSpec } = data;
            socket.emit(EVENT.SEND_CHAT, { ...message, status: false, errorSpec });
        }
    };

    const saveChatMessage = async (chatId, senderId, message) => {
        try {
            const response = await axios.post(`${API_SERVER}/api/chats/${chatId}/message`, {
                senderId,
                content: message,
            });
            return response;
        } catch (error) {
            return error.response;
        }
    };

    socket.on(EVENT.SEND_CHAT, sendChatMessage);
};

export default chat;
