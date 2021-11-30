import { createServer } from "http";
import { Server } from "socket.io";

import socketLoader from "./loader.js";

const httpServer = createServer();

const socketServerOption = isDevEnv()
    ? {
          cors: { origin: process.env.DEV_CLIENT_ORIGIN },
      }
    : {};

const io = new Server(httpServer, socketServerOption);
const port = process.env.PORT;

socketLoader(httpServer, io, port);

function isDevEnv() {
    return process.env.NODE_ENV.trim() === "development";
}
