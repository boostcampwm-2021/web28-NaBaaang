const chatHandler = (io, socket) => {
  const joinRoomById = ({ roomId }) => {
    socket.roomId = roomId.toString();
    socket.join(socket.roomId);
    io.to(socket.roomId).emit("join", `anonymous entered #${roomId} channel`);
  };

  const sendChatMessage = ({ message }) => {
    io.to(socket.roomId).emit("chat", message);
  };

  const alertDisconnection = ({ message }) => {
    console.log(message);
    io.to(socket.roomId).emit("alert-disconnect", message);
  };

  socket.on("join", joinRoomById);
  socket.on("chat", sendChatMessage);
  socket.on("alert-disconnect", alertDisconnection);
  socket.on("disconnect", () => {
    console.log(`${socket.roomId} socket disconnected`);
  });
};

export default chatHandler;
