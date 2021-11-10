const chatHandler = (io, socket) => {
  const joinRoomById = ({ roomId }) => {
    socket.roomId = roomId;
    socket.join(roomId);
    io.to(roomId).emit("join", `anonymous entered #${roomId} channel`);
  };

  const sendChatMessage = ({ message }) => {
    io.to(socket.roomId).emit("chat", message);
  };

  const forceDisconnect = () => socket.disconnect();

  socket.on("join", joinRoomById);
  socket.on("chat", sendChatMessage);
  socket.on("force-disconnect", forceDisconnect);
  socket.on("disconnect", () =>
    console.log(`${socket.roomId} socket disconnected`)
  );
};

export default chatHandler;
