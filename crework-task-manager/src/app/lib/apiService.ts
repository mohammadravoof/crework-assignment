import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, //Include cookies
});

// Signup
export const signUp = async (userData: any) => {
  try {
    const response = await apiClient.post('/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

// Login
export const login = async (loginData: any) => {
  try {
    const response = await apiClient.post('/', loginData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Get tasks by user ID
export const getTasksByUserId = async (userId: string) => {
  try {
    const response = await apiClient.get(`/task/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Create task
export const createTask = async (taskData: any) => {
  try {
    const response = await apiClient.post('/task', taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Update task
export const updateTask = async (taskId: string, taskData: any) => {
  try {
    const response = await apiClient.put(`/task/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

// Delete task
export const deleteTask = async (taskId: string) => {
  try {
    const response = await apiClient.delete(`/task/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
