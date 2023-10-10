import {
  createContext, useState, ReactNode, FC, useMemo, useCallback,
} from 'react';

import { IUserLoginResponse } from '@interface/';
import { clearUser } from '@redux/';

import { useAppDispatch } from '../hook/use-app-dispatch-and-selector';


interface IAuthContext {
  isAuthUser: IUserLoginResponse | null;
  handlerOffAuthUser: () => void;
}

interface IAppContext {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthUser: null,
  handlerOffAuthUser: () => null,
});

export const AppContext: FC<IAppContext> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isAuthUser, setIsAuthUser] = useState(() => {
    const checkUserSave = localStorage.getItem('user');
    const parseUserSave: IUserLoginResponse | null = checkUserSave ? JSON.parse(checkUserSave) : null;
    if (parseUserSave) {
      return parseUserSave;
    }

    return null;
  });

  const handlerOffAuthUser = useCallback(() => {
    dispatch(clearUser());
    localStorage.removeItem('user');
  }, [dispatch]);

  const context: IAuthContext = useMemo(() => ({
    isAuthUser,
    handlerOffAuthUser,
    setIsAuthUser,
  }), [handlerOffAuthUser, isAuthUser]);

  return (
    <AuthContext.Provider value={ context }>
      { children }
    </AuthContext.Provider>
  );
};
