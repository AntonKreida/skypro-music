import {
  createContext, useState, ReactNode, FC, useMemo, useCallback
} from 'react';


interface IAuthContext {
  isAuthUser: boolean;
  handlerOnAuthUser: () => void;
  handlerOffAuthUser: () => void;
}

interface IAppContext {
  children: ReactNode;
}


export const AuthContext = createContext<IAuthContext>({
  isAuthUser: false,
  handlerOnAuthUser: () => null,
  handlerOffAuthUser: () => null,
});

export const AppContext: FC<IAppContext> = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(false);

  const handlerOnAuthUser = useCallback(() => {
    setIsAuthUser(true);
  }, []);

  const handlerOffAuthUser = useCallback(() => {
    setIsAuthUser(false);
  }, []);

  const context: IAuthContext = useMemo(() => ({
    isAuthUser,
    handlerOnAuthUser,
    handlerOffAuthUser,
  }), [handlerOffAuthUser, handlerOnAuthUser, isAuthUser]);

  return (
    <AuthContext.Provider value={ context }>
      { children }
    </AuthContext.Provider>
  );
};
