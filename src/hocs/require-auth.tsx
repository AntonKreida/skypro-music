import { Navigate, Outlet } from 'react-router-dom';


export const RequireAuth = () => {
  const checkUserSave = localStorage.getItem('user');
  const parseUserSave = !!checkUserSave;

  if (!parseUserSave) {
    return <Navigate to="/login" />;
  }

  return (
    <Outlet />
  );
};
