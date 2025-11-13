import { useAuth } from '../../hooks/useAuth';
import { useUserProfile } from './useUserProfile';
import { useLogout } from '../auth/useLogout';
import './Dashboard.css';

export const DashboardPage = () => {
  const { user } = useAuth();
  const { data: profile, isLoading, error } = useUserProfile();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>Error loading profile: {error.message}</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, <b>{user?.name || 'User'}</b>!</p>

      {profile && (
        <pre className="profile-data">{JSON.stringify(profile, null, 2)}</pre>
      )}

      <button onClick={() => logout()} disabled={isLoggingOut}>
        {isLoggingOut ? 'Logging out...' : 'Logout'}
      </button>
    </div>
  );
};