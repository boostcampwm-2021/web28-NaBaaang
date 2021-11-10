import { createServer } from "http";
import { Server } from "socket.io";
import chatHandler from "./chatHandler.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const chatNameSpace = io.of("/chat");
const port = 5000;

const onConnection = socket => {
  chatHandler(chatNameSpace, socket);
};

chatNameSpace.on("connection", onConnection);

httpServer.listen(port, () =>
  console.log(`Socket.io started on PORT: ${port}`)
);
