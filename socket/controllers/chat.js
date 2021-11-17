import axios from "axios";

const SEND_CHAT = "chat";

const API_SERVER = "http://localhost:4000";

const chat = (io, socket) => {
  const sendChatMessage = (chatId, message) => {
    const { userId: senderId, content } = message;
    saveChatMessage(chatId, senderId, content);
    io.to(socket.channelId).emit("chat", message);
  };
  const saveChatMessage = async (chatId, senderId, message) => {
    const response = await axios.post(
      `${API_SERVER}/api/chats/${chatId}/message`,
      {
        sender_id: senderId,
        content: message,
      }
    );
    return response;
  };
  socket.on(SEND_CHAT, sendChatMessage);
};

export default chat;
