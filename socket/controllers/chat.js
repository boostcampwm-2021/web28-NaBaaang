import axios from "axios";

const SEND_CHAT = "chat";

const API_SERVER = "http://localhost:4000";

const chat = (io, socket) => {
  const sendChatMessage = async message => {
    const { chatId } = socket;
    const { userId: senderId, content } = message;
    const storeStatus = await saveChatMessage(chatId, senderId, content);
    console.log(message, storeStatus);
    if (storeStatus) {
      socket.to(socket.channelId).emit(SEND_CHAT, { ...message, status: true });
    } else {
      socket.emit(SEND_CHAT, { ...message, status: false });
    }
  };

  const saveChatMessage = async (chatId, senderId, message) => {
    try {
      const response = await axios.post(
        `${API_SERVER}/api/chats/${chatId}/message`,
        {
          senderId,
          content: message,
        }
      );
      switch (response.status) {
        case 201:
          return true;
        case 400:
          return false;
        case 500:
          return false;
        default:
          return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  socket.on(SEND_CHAT, sendChatMessage);
};

export default chat;
