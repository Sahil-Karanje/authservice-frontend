import axios from 'axios';
import { ENDPOINTS } from './endpoints';

// Create axios instance with default config
const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (data) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.login, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.register, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get(ENDPOINTS.profile);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch profile');
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post(ENDPOINTS.logout);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};