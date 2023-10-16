import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@hook/';
import { getStateUser } from '@redux/';


export const RequireAuth = () => {
  const { user } = useAppSelector(getStateUser);

  if (!user?.username) {
    return <Navigate to="/login" />;
  }

  return (
    <Outlet />
  );
};
