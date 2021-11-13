const chatHandler = (io, socket) => {
  const joinRoomById = ({ channelId }) => {
    socket.channelId = channelId.toString();
    socket.join(socket.channelId);
    io.to(socket.channelId).emit("join", `anonymous entered #${channelId} channel`);
  };

  const sendChatMessage = ({ message }) => {
    io.to(socket.channelId).emit("chat", message);
  };

  const alertDisconnection = ({ message }) => {
    console.log(message);
    io.to(socket.channelId).emit("alert-disconnect", message);
  };

  socket.on("join", joinRoomById);
  socket.on("chat", sendChatMessage);
  socket.on("alert-disconnect", alertDisconnection);
  socket.on("disconnect", () => {
    console.log(`${socket.channelId} socket disconnected`);
  });
};

export default chatHandler;
