import { createServer } from "http";
import { Server } from "socket.io";
import chatHandler from "./chatHandler.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

const ChatSocket = io.of("/chat");

const onChatConnection = socket => {
  chatHandler(ChatSocket, socket);
};

ChatSocket.on("connection", onChatConnection);

httpServer.listen(port, () =>
  console.log(`Socket.io started on PORT: ${port}`)
);
