import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { base } from '@api/';
import {
  IDataFormCreateUser, IDataFormLoginUser, IResponseError, IUserCreateResponse, IUserLoginResponse
} from '@interface/';


export const postCreateUser = createAsyncThunk<
IUserCreateResponse,
IDataFormCreateUser,
{rejectValue: IResponseError | string}>(
  'user/create',
  async (dataForm: IDataFormCreateUser, thunkApi) => {
    try {
      const { data } = await base.post<IUserCreateResponse>('/user/signup/', { ...dataForm }, {
        headers: { 'content-type': 'application/json' },
      });

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data as IResponseError);
      }

      return thunkApi.rejectWithValue('default');
    }
  }
);

export const postLoginUser = createAsyncThunk<IUserLoginResponse, IDataFormLoginUser, {rejectValue: string}>(
  'user/login',
  async (dataForm: IDataFormLoginUser, thunkApi) => {
    try {
      const { data } = await base.post<IUserLoginResponse>('/user/login/', { ...dataForm }, {
        headers: { 'content-type': 'application/json' },
      });

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data);
      }

      return thunkApi.rejectWithValue('Что-то пошло не так попробуйте позже :(');
    }
  }
);
