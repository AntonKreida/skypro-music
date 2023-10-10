import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IResponseError, ITokenResponse, IUserLoginResponse } from '@interface/';

import { postCreateUser, postLoginUser, postGetToken } from './user-auth.func';


interface IInitState {
  user: {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
  token: {
    access: string | null;
    refresh: string | null;
  } | null;
  isLoading: boolean;
  isError: IResponseError | string | null;
}

const initialState: IInitState = {
  user: null,
  token: null,
  isLoading: false,
  isError: null
};


export const sliceUserAuth = createSlice({
  name: 'userAuth/slice',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postCreateUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(postCreateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postCreateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload ?? 'Что-то пошло не так :(';
    });
    builder.addCase(postLoginUser.fulfilled, (state, action: PayloadAction<IUserLoginResponse>) => {
      state.isLoading = false;
      state.isError = null;
      state.user = { ...action.payload };
      localStorage.setItem('user', JSON.stringify({ ...action.payload }));
    });
    builder.addCase(postLoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postLoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload ?? 'Что-то пошло не так :(';
    });
    builder.addCase(postGetToken.fulfilled, (state, action: PayloadAction<ITokenResponse>) => {
      state.isError = null;
      state.token = { ...action.payload };
      localStorage.setItem('token', JSON.stringify({ ...action.payload }));
    });
    builder.addCase(postGetToken.rejected, (state) => {
      state.isError = 'Что-то пошло не так :(';
    });
  },
});

export const { clearUser } = sliceUserAuth.actions;
