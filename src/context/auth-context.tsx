import {
  createContext, useState, ReactNode, FC, useMemo, useCallback
} from 'react';


interface IFormData {
  email: string;
  password: string;
}

interface IAuthContext {
  isAuthUser: boolean;
  handlerAuthUser: (dataFrom: IFormData) => void;
  handlerCreateUser: (dataFrom: IFormData) => void;
}

interface IAppContext {
  children: ReactNode;
}

const mockUsers = [
  {
    email: 'exemple@exmple.ru',
    password: 'qwerty123'
  },
];


export const AuthContext = createContext<IAuthContext>({
  isAuthUser: false,
  handlerAuthUser: (_dataFrom: IFormData) => null,
  handlerCreateUser: (_dataFrom: IFormData) => null,

});

export const AppContext: FC<IAppContext> = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(false);

  const handlerAuthUser = useCallback((dataFrom: IFormData) => {
    const targetUser = mockUsers.find((user) => {
      if (user.email === dataFrom.email && user.password === dataFrom.password) {
        return user;
      }

      return null;
    });

    if (!targetUser) {
      setIsAuthUser(false);
      return;
    }

    setIsAuthUser(true);
  }, []);

  const handlerCreateUser = useCallback((dataFrom: IFormData) => {
    mockUsers.push({ ...dataFrom });
  }, []);

  const context: IAuthContext = useMemo(() => ({
    isAuthUser,
    handlerAuthUser,
    handlerCreateUser,
  }), [handlerAuthUser, handlerCreateUser, isAuthUser]);

  return (
    <AuthContext.Provider value={ context }>
      { children }
    </AuthContext.Provider>
  );
};
