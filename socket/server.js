import { createServer } from "http";
import { Server } from "socket.io";
import socketHandler from "./socketHandler.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

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
