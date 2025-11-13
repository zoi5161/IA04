import { LoginForm } from './LoginForm';
import './Auth.css';

export const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};