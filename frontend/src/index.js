import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Adjusted import path
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import { SocketProvider } from './context/SocketContext';

ReactDOM.render(
  <AuthProvider>
    <TaskProvider>
      <SocketProvider>
        <App />
      </SocketProvider>
    </TaskProvider>
  </AuthProvider>,
  document.getElementById('root')
);
