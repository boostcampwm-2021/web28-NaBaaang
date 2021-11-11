import { createServer } from "http";
import { Server } from "socket.io";
import chatHandler from "./chatHandler.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

const onConnection = socket => {
  chatHandler(io, socket);
};

io.on("connection", onConnection);

httpServer.listen(port, () =>
  console.log(`Socket.io started on PORT: ${port}`)
);
