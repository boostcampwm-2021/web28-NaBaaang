export const changeUserCnt = (io, roomId) => {
  const clients = io.sockets.adapter.rooms.get(roomId);
  const numClients = clients ? clients.size : 0;
  io.to(roomId).emit("changeUserCnt", numClients);
};
