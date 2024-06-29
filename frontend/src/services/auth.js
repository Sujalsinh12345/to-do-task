import { api } from '../utils/api';

export const fetchCurrentUser = async () => {
  const response = await api.get('/current-user');
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const register = async (credentials) => {
  const response = await api.post('/register', credentials);
  return response.data;
};


// Placeholder auth service