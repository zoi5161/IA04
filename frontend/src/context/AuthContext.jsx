import { createContext, useState, useEffect } from 'react';
import { authApi } from '../api/authApi';
import { tokenStorage } from '../lib/tokenStorage';
import { setAuthToken } from '../api/axiosInstance';
import { fetchProfile } from '../api/userApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const refreshToken = tokenStorage.getRefreshToken();
      if (!refreshToken) {
        setIsLoading(false);
        return;
      }

      try {
        const { accessToken } = await authApi.refresh(refreshToken);
        setAuthToken(accessToken);
        const profile = await fetchProfile();
        setUser(profile);
      } catch (error) {
        tokenStorage.clearTokens();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const loginSuccess = (data) => {
    tokenStorage.setRefreshToken(data.refreshToken);
    setAuthToken(data.accessToken);
    setUser(data.user);
  };

  const logoutSuccess = () => {
    tokenStorage.clearTokens();
    setAuthToken(null);
    setUser(null);
  };

  const value = {
    user,
    setUser,
    loginSuccess,
    logoutSuccess,
    isAuthenticated: !!user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
};