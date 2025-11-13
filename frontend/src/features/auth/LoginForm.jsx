import { useForm } from 'react-hook-form';
import { useLogin } from './useLogin';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutate: login, isPending, error: loginError } = useLogin();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        label="Email"
        type="email"
        {...register('email', { required: 'Email is required' })}
        error={errors.email}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        {...register('password', { required: 'Password is required' })}
        error={errors.password}
      />

      {loginError && <p style={{ color: 'red' }}>Error: {loginError.response?.data?.message || 'Login failed'}</p>}
      
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  );
};