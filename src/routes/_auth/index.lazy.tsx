import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
