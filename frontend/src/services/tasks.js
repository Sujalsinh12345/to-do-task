import { api } from '../utils/api';

export const fetchTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const fetchTask = async (id) => {
  const response = await api.get(`/tasks/${id}`);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await api.post('/tasks', taskData);
  return response.data;
};

export const updateTask = async (id, updatedData) => {
  const response = await api.put(`/tasks/${id}`, updatedData);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};


// Placeholder tasks service

