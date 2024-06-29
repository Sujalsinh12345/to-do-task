import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export const connectSocket = () => {
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};

export const onPresenceUpdate = (callback) => {
  socket.on('presenceUpdate', callback);
};
