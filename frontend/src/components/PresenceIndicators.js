import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const PresenceIndicators = ({ userId }) => {
  const [onlineUsers, setOnlineUsers] = useState({});
  const socket = io('http://localhost:5000');

  useEffect(() => {
    socket.emit('userConnected', userId);

    socket.on('presenceUpdate', (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, socket]);

  return (
    <div>
      {Object.keys(onlineUsers).map(user => (
        <span key={user}>{user} is online</span>
      ))}
    </div>
  );
};

export default PresenceIndicators;
