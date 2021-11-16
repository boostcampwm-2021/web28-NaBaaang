const JOIN_CHANNEL = "join";
const LEAVE_CHANNEL = "leave";
const TERMINATE_CHANNEL = "noticeChannelEnded";

const channel = (io, socket) => {
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
    console.log(`${socket.id}(${socket.auth}) leaved #${channelId}`);
    io.to(channelId).emit(
      "leave",
      `${socket.id}(${socket.auth}) leaved #${channelId}`
    );
  };
  const terminateChannel = message => {
    if (socket.auth !== "streamer") {
      throw new Error("방송 종료 권한이 없습니다");
    }
    console.log(message);
    io.to(socket.channelId).emit("noticeChannelEnded", message);
    leaveChannel();
  };

  socket.on(JOIN_CHANNEL, joinChannel);
  socket.on(LEAVE_CHANNEL, leaveChannel);
  socket.on(TERMINATE_CHANNEL, terminateChannel);
};

export default channel;
