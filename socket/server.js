import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

io.on("connection", socket => {
  console.log("[server] on connection");
  socket.emit("greeting-from-server", { greeting: "Hello Client" });
  socket.on("greeting-from-client", message => {
    console.log(`${message} from ${socket.roomId}`);
  });

  socket.on("join", ({ roomId }) => {
    socket.roomId = roomId;
    socket.join(roomId);
    io.to(roomId).emit("after-join", "anonymous entered the room");
  });
  socket.on("disconnect", () => {
    console.log(`${socket} socket disconnected`);
  });
});

httpServer.listen(port, () =>
  console.log(`Socket.io started on PORT: ${port}`)
);
