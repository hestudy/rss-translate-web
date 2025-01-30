import { Outlet, createFileRoute } from '@tanstack/react-router';
import Login from '../components/Login';
import { useAuth } from '../hooks/useAuth';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
  const auth = useAuth();

  if (auth.isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="loading loading-spinner loading-xl" />
      </div>
    );
  }

  if (!auth.isAuthed) {
    return <Login />;
  }

  return (
    <>
      <div>Hello "/_auth"!</div>
      <Outlet />
    </>
  );
}
