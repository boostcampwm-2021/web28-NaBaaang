import channel from "./controllers/channel.js";
import chat from "./controllers/chat.js";

import { changeUserCnt } from "./utils/user.js";

const socketLoader = (httpServer, io, port) => {
    io.on("connection", (socket) => {
        channel(io, socket);
        chat(io, socket);
        socket.on("disconnect", () => {
            changeUserCnt(io, socket.channelId);
        });
    });

    httpServer.listen(port, () => console.log(`Socket.io started on PORT: ${port}`));
};

export default socketLoader;
