import { api } from '../utils/api';

export const syncTaskWithCalendar = async (taskId) => {
  const response = await api.post(`/tasks/${taskId}/sync`);
  return response.data;
};
