import { createServer } from "http";
import { Server } from "socket.io";
import chatHandler from "./socketHandler.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

io.on("connection", socket => {
  const socketHandler = chatHandler(io, socket);

  socket.on("join", socketHandler.joinChannel);
  socket.on("leave", socketHandler.leaveChannel);
  socket.on("chat", socketHandler.sendChatMessage);
  socket.on("noticeChannelEnded", socketHandler.noticeChannelEnded);
  socket.on("disconnect", () => {
    console.log(socket.rooms);
    console.log(`${socket.channelId} socket disconnected`);
  });
});

httpServer.listen(port, () =>
  console.log(`Socket.io started on PORT: ${port}`)
);
