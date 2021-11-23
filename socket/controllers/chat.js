import axios from "axios";

const SEND_CHAT = "chat";

const API_SERVER = "http://localhost:4000";

const chat = (io, socket) => {
  const sendChatMessage = async message => {
    const { chatId } = socket;
    const { userId: senderId, content } = message;
    try {
      const status = await saveChatMessage(chatId, senderId, content);
      io.to(socket.channelId).emit("chat", { ...message, status });
    } catch (error) {
      console.log(error);
      io.to(socket.channelId).emit("chat", { ...message, status: -1 });
    }
  };

  const saveChatMessage = async (chatId, senderId, message) => {
    const response = await axios.post(
      `${API_SERVER}/api/chats/${chatId}/message`,
      {
        senderId,
        content: message,
      }
    );
    return response.data;
  };

  socket.on(SEND_CHAT, sendChatMessage);
};

export default chat;
