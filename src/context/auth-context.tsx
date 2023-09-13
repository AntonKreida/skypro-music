import {
  createContext, useState, ReactNode, FC, useMemo, useCallback,
} from 'react';


interface IFormData {
  email: string;
  password: string;
}

interface IAuthContext {
  isAuthUser: boolean;
  handlerOnAuthUser: (dataFrom: IFormData) => boolean;
  handlerCreateUser: (dataFrom: IFormData) => void;
  handlerOffAuthUser: () => void;
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
  handlerOnAuthUser: (_dataFrom: IFormData) => false,
  handlerCreateUser: (_dataFrom: IFormData) => null,
  handlerOffAuthUser: () => null,
});

export const AppContext: FC<IAppContext> = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(() => {
    // Проверка сохранен ли токен
    if (localStorage.getItem('user')) {
      return true;
    }

    return false;
  });

  const handlerOnAuthUser = useCallback((dataFrom: IFormData) => {
    const targetUser = mockUsers.find((user) => {
      if (user.email === dataFrom.email && user.password === dataFrom.password) {
        return user;
      }

      return null;
    });

    if (!targetUser) {
      return false;
    }

    // Тут будет сохранение токена в localStorage
    localStorage.setItem('user', '1234567qwe');
    setIsAuthUser(true);

    return true;
  }, []);

  const handlerCreateUser = useCallback((dataFrom: IFormData) => {
    mockUsers.push({ ...dataFrom });
  }, []);

  const handlerOffAuthUser = () => {
    localStorage.removeItem('user');
    setIsAuthUser(false);
  };

  const context: IAuthContext = useMemo(() => ({
    isAuthUser,
    handlerOnAuthUser,
    handlerCreateUser,
    handlerOffAuthUser,
    setIsAuthUser,
  }), [handlerOnAuthUser, handlerCreateUser, isAuthUser]);

  return (
    <AuthContext.Provider value={ context }>
      { children }
    </AuthContext.Provider>
  );
};
