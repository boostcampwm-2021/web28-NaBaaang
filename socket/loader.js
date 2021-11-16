import socketHandler from "./socketHandler.js";

const initSocketConnection = (io, port) => {
  io.on("connection", socket => {
    const handler = socketHandler(io, socket);

    socket.on("join", handler.joinChannel);
    socket.on("leave", handler.leaveChannel);
    socket.on("chat", handler.sendChatMessage);
    socket.on("noticeChannelEnded", handler.noticeChannelEnded);
    socket.on("disconnect", () => {});
  });

  httpServer.listen(port, () =>
    console.log(`Socket.io started on PORT: ${port}`)
  );
};

export default initSocketConnection;
