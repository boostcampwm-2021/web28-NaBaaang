const socketHandler = (io, socket) => {
  const joinChannel = ({ channelId, auth }) => {
    socket.channelId = channelId.toString();
    socket.auth = auth.toString();
    socket.join(socket.channelId);
    io.to(socket.channelId).emit(
      "join",
      `${socket.id} entered #${socket.channelId} channel (${socket.auth})`
    );
  };

  const leaveChannel = () => {
    const channelId = socket.channelId;
    socket.leave(channelId);
    io.to(channelId).emit(
      "leave",
      `${socket.id}(${socket.auth}) leaved #${channelId}`
    );
  };

  const sendChatMessage = ({ message }) => {
    io.to(socket.channelId).emit("chat", message);
  };

  const noticeChannelEnded = ({ message }) => {
    if (socket.auth !== "streamer") {
      throw new Error("방송 종료 권한이 없습니다");
    }
    io.to(socket.channelId).emit("noticeChannelEnded", message);
    leaveChannel();
  };
  return { joinChannel, leaveChannel, sendChatMessage, noticeChannelEnded };
};

export default socketHandler;
