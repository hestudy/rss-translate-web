import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import * as React from 'react';
import { Toaster } from 'sonner';

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen w-screen overflow-hidden">
          <Outlet />
        </div>
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
