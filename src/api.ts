import createFetchClient from 'openapi-fetch';
import createClient from 'openapi-react-query';
import type { paths } from './gen/schema';
import { toast } from 'sonner';

export const api = createFetchClient<paths>({
  baseUrl: import.meta.env.PUBLIC_API_URL,
});

api.use({
  onRequest: async ({ request }) => {
    const token = localStorage.getItem('token');
    if (token) {
      request.headers.set('Authorization', token);
    }

    request.headers.set('Content-Type', 'application/json');
    request.headers.set('accept', 'application/json');

    return request;
  },
  onResponse({ response }) {
    if (!response.ok) {
      toast.error(response.statusText);
    }
    return response;
  },
});

export const $api = createClient(api);
