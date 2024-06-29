import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { io } from 'socket.io-client';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TaskPage from './pages/TaskPage';
import { AuthProvider } from './context/AuthContext';

const socket = io(process.env.REACT_APP_API_URL);

const App = () => {
  useEffect(() => {
    socket.on('taskUpdated', (task) => {
      console.log('Task updated:', task);
    });

    socket.on('taskDeleted', (taskId) => {
      console.log('Task deleted:', taskId);
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/tasks" component={TaskPage} />
      </Router>
    </AuthProvider>
  );
};

export default App;
