import {
  createContext, ReactNode, FC, useMemo, useCallback,
} from 'react';

import { clearUser } from '@redux/';

import { useAppDispatch } from '../hook/use-app-dispatch-and-selector';


interface IAuthContext {
  handlerOffAuthUser: () => void;
}

interface IAppContext {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  handlerOffAuthUser: () => null,
});

export const AppContext: FC<IAppContext> = ({ children }) => {
  const dispatch = useAppDispatch();

  const handlerOffAuthUser = useCallback(() => {
    dispatch(clearUser());
  }, [dispatch]);

  const context: IAuthContext = useMemo(() => ({
    handlerOffAuthUser,
  }), [handlerOffAuthUser]);

  return (
    <AuthContext.Provider value={ context }>
      { children }
    </AuthContext.Provider>
  );
};
