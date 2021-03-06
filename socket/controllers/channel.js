import { changeUserCnt } from "../utils/user.js";
import EVENT from "../constants/socketEvents.js";

const channel = (io, socket) => {
  const joinChannel = ({ channelId, chatId, auth }) => {
    try {
      if (!channelId || !chatId) return;
      socket.channelId = channelId.toString();
      socket.chatId = chatId.toString();
      socket.auth = auth.toString();
      socket.join(socket.channelId);

      changeUserCnt(io, socket.channelId);

      io.to(socket.channelId).emit(
        EVENT.JOIN_CHANNEL,
        `${socket.id} entered #${socket.channelId} channel (${socket.auth})`
      );
    } catch (err) {
      throw new Error(error);
    }
  };
  const leaveChannel = () => {
    try {
      const channelId = socket.channelId;
      socket.leave(channelId);

      changeUserCnt(io, socket.channelId);

      io.to(channelId).emit(
        EVENT.LEAVE_CHANNEL,
        `${socket.id}(${socket.auth}) leaved #${channelId}`
      );
    } catch (err) {
      throw new Error(error);
    }
  };
  const terminateChannel = message => {
    try {
      if (socket.auth !== "streamer") {
        throw new Error("방송 종료 권한이 없습니다");
      }
      io.to(socket.channelId).emit(EVENT.TERMINATE_CHANNEL, message);
      leaveChannel();
    } catch (error) {
      throw new Error(error);
    }
  };

  socket.on(EVENT.JOIN_CHANNEL, joinChannel);
  socket.on(EVENT.LEAVE_CHANNEL, leaveChannel);
  socket.on(EVENT.TERMINATE_CHANNEL, terminateChannel);
};

export default channel;
