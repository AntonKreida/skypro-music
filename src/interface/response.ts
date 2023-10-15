export const errorTitle = {
  username: 'Имя пользователя:',
  password: 'Пароль:',
  email: 'Почта:',
};

export interface IResponseError {
  username: string[];
  password: string[];
  email: string[];
}

export interface IUserCreateResponse {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface ITokenResponse {
  refresh: string;
  access: string;
}

export interface ITokenRefreshResponse {
  access: string;
}
