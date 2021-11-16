import { createServer } from "http";
import { Server } from "socket.io";
import initSocketConnection from "./loader.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

initSocketConnection(io, port);
