import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/authApi';
import { useAuth } from '../../hooks/useAuth';

export const useLogin = () => {
  const navigate = useNavigate();
  const { loginSuccess } = useAuth();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      loginSuccess(data);
      navigate('/dashboard');
    },
  });
};