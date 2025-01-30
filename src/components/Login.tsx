import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { $api } from '../api';
import type { components } from '../gen/schema';
import { DevTool } from '@hookform/devtools';

const Login = memo(() => {
  const form = useForm<components['schemas']['AuthEmailLoginDto']>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const mutation = $api.useMutation('post', '/api/v1/auth/email/login');

  return (
    <div className="h-full w-full flex justify-center items-center">
      <form
        onSubmit={form.handleSubmit(async (data) => {
          const res = await mutation.mutateAsync({
            body: {
              ...data,
            },
          });
          console.log(res);
        })}
        className="space-y-4"
      >
        <div className="text-4xl text-center mb-10">Rss Translate</div>
        <div>
          <label htmlFor="" className="input validator">
            <span className="label">Email</span>
            <input
              {...form.register('email')}
              type="email"
              required
              placeholder="example@example.com"
            />
          </label>
        </div>
        <div>
          <label htmlFor="" className="input validator">
            <span className="label">Password</span>
            <input
              {...form.register('password')}
              type="password"
              required
              placeholder="xxx"
            />
          </label>
        </div>
        <div>
          <button
            disabled={mutation.isPending}
            type="submit"
            className="btn btn-block"
          >
            {mutation.isPending && <span className="loading loading-spinner" />}
            Login
          </button>
        </div>
      </form>
      <DevTool control={form.control} />
    </div>
  );
});

export default Login;
