import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import path from "path";

import socketLoader from "./loader.js";

dotenv.config({ path: path.resolve(process.cwd(), "config/.env") });

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});
const port = 5000;

socketLoader(httpServer, io, port);
