import React, { createContext, useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/tasks';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks()
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error))
      .finally(() => setLoading(false));
  }, []);

  const handleCreateTask = (taskData) => {
    return createTask(taskData).then(newTask => setTasks([...tasks, newTask]));
  };

  const handleUpdateTask = (taskId, updatedData) => {
    return updateTask(taskId, updatedData).then(updatedTask => {
      setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task)));
    });
  };

  const handleDeleteTask = (taskId) => {
    return deleteTask(taskId).then(() => {
      setTasks(tasks.filter(task => task.id !== taskId));
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, loading, handleCreateTask, handleUpdateTask, handleDeleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
