import axios from "axios";

const SEND_CHAT = "chat";

const API_SERVER = "http://localhost:4000";

const chat = (io, socket) => {
  const sendChatMessage = (channelId, message) => {
    const { userId: senderId, content } = message;
    saveChatMessage(channelId, senderId, content);
    io.to(socket.channelId).emit("chat", message);
  };
  const saveChatMessage = async (channelId, senderId, message) => {
    const response = await axios.post(
      `${API_SERVER}/api/channel/${channelId}/message`,
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
