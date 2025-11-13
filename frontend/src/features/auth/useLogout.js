import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/authApi';
import { useAuth } from '../../hooks/useAuth';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { logoutSuccess } = useAuth();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      logoutSuccess();
      queryClient.clear();
      navigate('/login');
    },
    onError: () => {
      logoutSuccess();
      queryClient.clear();
      navigate('/login');
    }
  });
};