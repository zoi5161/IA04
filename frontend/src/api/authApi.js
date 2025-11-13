import axios from 'axios';
import axiosInstance from './axiosInstance';
import { tokenStorage } from '../lib/tokenStorage';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001/api') + '/auth';

export const authApi = {
  login: async (credentials) => {
    const { data } = await axios.post(`${API_URL}/login`, credentials);
    return data;
  },
  logout: async () => {
    const refreshToken = tokenStorage.getRefreshToken();
    const { data } = await axiosInstance.post('/auth/logout', { token: refreshToken });
    return data;
  },
  refresh: async (refreshToken) => {
    const { data } = await axios.post(`${API_URL}/refresh`, { token: refreshToken });
    return data;
  }
};