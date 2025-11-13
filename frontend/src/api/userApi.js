import axiosInstance from './axiosInstance';

export const fetchProfile = async () => {
  const { data } = await axiosInstance.get('/user/profile');
  return data;
};