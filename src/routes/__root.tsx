import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import * as React from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="h-screen w-screen overflow-hidden">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
