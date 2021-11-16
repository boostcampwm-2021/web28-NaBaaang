const SEND_CHAT = "chat";

const chat = (io, socket) => {
  const sendChatMessage = message => {
    io.to(socket.channelId).emit("chat", message);
  };
  socket.on(SEND_CHAT, sendChatMessage);
};

export default chat;
