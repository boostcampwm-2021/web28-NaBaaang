const chatHandler = (io, socket) => {
  const joinChannel = ({ channelId, auth }) => {
    socket.channelId = channelId.toString();
    socket.auth = auth.toString();
    socket.join(socket.channelId);
    io.to(socket.channelId).emit(
      "join",
      `${socket.id} entered #${channelId} channel (${auth})`
    );
  };

  const leaveChannel = () => {
    const channelId = socket.channelId;
    socket.leave(channelId);
    io.to(channelId).emit("leave", `${socket.id} leaved #${channelId}`);
  };

  const sendChatMessage = ({ message }) => {
    io.to(socket.channelId).emit("chat", message);
  };

  const alertDisconnection = ({ message }) => {
    console.log(message);
    io.to(socket.channelId).emit("alert-disconnect", message);
  };
  return { joinChannel, leaveChannel, sendChatMessage, alertDisconnection };
};

export default chatHandler;
