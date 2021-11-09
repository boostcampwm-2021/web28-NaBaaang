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
  socket.on("greeting-from-client", function (message) {
    console.log(message);
  });
});

httpServer.listen(port, () =>
  console.log(`Socket.io started on PORT: ${port}`)
);
