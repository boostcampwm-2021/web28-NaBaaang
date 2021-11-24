import EVENT from "../constants/socketEvents.js";

const channel = (io, socket) => {
  const joinChannel = ({ channelId, chatId, auth }) => {
    console.log("SERVER CHANNEL JOIN CHANNEL");
    console.log(channelId, chatId, auth);
    try {
      if (!channelId || !chatId) return;
      socket.channelId = channelId.toString();
      socket.chatId = chatId.toString();
      socket.auth = auth.toString();
      socket.join(socket.channelId);
      io.to(socket.channelId).emit(
        EVENT.JOIN_CHANNEL,
        `${socket.id} entered #${socket.channelId} channel (${socket.auth})`
      );
    } catch (err) {
      console.log(err);
    }
  };
  const leaveChannel = () => {
    try {
      const channelId = socket.channelId;
      socket.leave(channelId);
      console.log(`${socket.id}(${socket.auth}) leaved #${channelId}`);
      io.to(channelId).emit(
        EVENT.LEAVE_CHANNEL,
        `${socket.id}(${socket.auth}) leaved #${channelId}`
      );
    } catch (err) {
      console.log(err);
    }
  };
  const terminateChannel = message => {
    try {
      if (socket.auth !== "streamer") {
        throw new Error("방송 종료 권한이 없습니다");
      }
      console.log(message);
      io.to(socket.channelId).emit(EVENT.TERMINATE_CHANNEL, message);
      leaveChannel();
    } catch (error) {
      console.error(error);
    }
  };

  socket.on(EVENT.JOIN_CHANNEL, joinChannel);
  socket.on(EVENT.LEAVE_CHANNEL, leaveChannel);
  socket.on(EVENT.TERMINATE_CHANNEL, terminateChannel);
};

export default channel;
