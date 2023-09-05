import { Navigate, Outlet } from 'react-router-dom';

import { useAppAuthContext } from '@hook/';


export const RequireAuth = () => {
  const { isAuthUser } = useAppAuthContext();

  if (!isAuthUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Outlet />
  );
};
