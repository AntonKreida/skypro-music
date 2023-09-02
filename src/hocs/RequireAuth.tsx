import { Navigate, Outlet } from 'react-router-dom';

import { useAppContext } from '@hook/';


export const RequireAuth = () => {
  const { isAuthUser } = useAppContext();

  if (!isAuthUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Outlet />
  );
};
