const chatHandler = (io, socket) => {
  const joinRoomById = ({ roomId }) => {
    socket.roomId = roomId.toString();
    socket.join(socket.roomId);
    io.to(socket.roomId).emit("join", `anonymous entered #${roomId} channel`);
  };

  const sendChatMessage = ({ message }) => {
    io.to(socket.roomId).emit("chat", message);
  };

  socket.on("join", joinRoomById);
  socket.on("chat", sendChatMessage);
  socket.on("disconnect", () => {
    console.log(`${socket.roomId} socket disconnected`);
  });
};

export default chatHandler;
