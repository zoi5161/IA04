import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '../../api/userApi';
import { useAuth } from '../../hooks/useAuth';

export const useUserProfile = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
    enabled: isAuthenticated,
  });
};