import { createServer } from "http";
import { Server } from "socket.io";
import socketLoader from "./loader.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

socketLoader(httpServer, io, port);
