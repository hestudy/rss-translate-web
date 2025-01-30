import { $api } from '../api';

export const useAuth = () => {
  const token = localStorage.getItem('token');

  const query = $api.useQuery(
    'get',
    '/api/v1/auth/me',
    {},
    {
      enabled: !!token,
    },
  );

  return {
    ...query,
    isAuthed: !!query.data?.id,
  };
};
