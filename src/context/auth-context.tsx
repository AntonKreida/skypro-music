import {
  createContext, useState, ReactNode, FC, useMemo, useCallback,
} from 'react';
import { isAxiosError } from 'axios';

import { IDataFormCreateUser, IDataFormLoginUser, IUserLoginResponse } from '@interface/';
import { postLoginUser, postSigUpUser } from '@api/';


interface IAuthContext {
  isAuthUser: IUserLoginResponse | null;
  handlerOnAuthUser: (dataFrom: IDataFormLoginUser) => Promise<Error | IUserLoginResponse>;
  handlerCreateUser: (dataFrom: IDataFormCreateUser) => Promise<Error | void>;
  handlerOffAuthUser: () => void;
}

interface IAppContext {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthUser: null,
  handlerOnAuthUser: async () => new Error(),
  handlerCreateUser: async () => new Error(),
  handlerOffAuthUser: () => null,
});

export const AppContext: FC<IAppContext> = ({ children }) => {
  const [isAuthUser, setIsAuthUser] = useState(() => {
    const checkUserSave = localStorage.getItem('user');
    const parseUserSave: IUserLoginResponse | null = checkUserSave ? JSON.parse(checkUserSave) : null;
    if (parseUserSave) {
      return parseUserSave;
    }

    return null;
  });

  const handlerOnAuthUser = useCallback(async (dataFrom: IDataFormLoginUser) => {
    try {
      const response = await postLoginUser(dataFrom);
      setIsAuthUser(response);

      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        throw error.response?.data.detail;
      }

      throw Error('Что-то пошло не так попробуйте позже...');
    }
  }, []);

  const handlerCreateUser = useCallback(async (dataFrom: IDataFormCreateUser) => {
    const dataForCreateUser = {
      username: dataFrom.username,
      email: dataFrom.email,
      password: dataFrom.password,
    };

    try {
      await postSigUpUser(dataForCreateUser);
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      }

      throw error;
    }
  }, []);

  const handlerOffAuthUser = () => {
    localStorage.removeItem('user');
    setIsAuthUser(null);
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
