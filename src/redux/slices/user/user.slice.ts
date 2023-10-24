import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
  IResponseError, ITokenResponse, IUser, IUserLoginResponse
} from '@interface/';

import {
  postCreateUser, postLoginUser, postGetToken, postRefreshToken
} from './user.func';


interface IInitState {
  user: IUser | null;
  isLoading: boolean;
  isError: IResponseError | string | null;
  token: {
    access: string | null;
    refresh: string | null;
  };
}

const initialState: IInitState = {
  user: null,
  isLoading: false,
  isError: null,
  token: {
    access: null,
    refresh: null
  }
};


export const sliceUser = createSlice({
  name: 'userAuth/slice',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.token = {
        access: null,
        refresh: null
      };
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
    });
    builder.addCase(postRefreshToken.fulfilled, (state, action) => {
      state.token = { ...state.token, access: action.payload.access };
    });
  },
});

export const { clearUser } = sliceUser.actions;
