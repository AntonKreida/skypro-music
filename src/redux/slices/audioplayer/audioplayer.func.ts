import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { base } from '@api/';
import {
  ISectionTracks, ITrack,
} from '@interface/';

import type { RootState } from '@redux/';


export const getMainTrackList = createAsyncThunk<ITrack[], undefined, {rejectValue: string}>(
  'audioplayer/main',
  async (_, thunkApi) => {
    try {
      const { data } = await base.get<ITrack[]>('/catalog/track/all/');

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data);
      }

      return thunkApi.rejectWithValue('default');
    }
  }
);

export const getSectionTrackList = createAsyncThunk<ISectionTracks, number | string, {rejectValue: string}>(
  'audioplayer/selection',
  async (idSection, thunkApi) => {
    try {
      const { data } = await base.get<ISectionTracks>(`/catalog/selectio/${idSection}/`);

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue('Что-то пошло не так :(');
      }

      return thunkApi.rejectWithValue('Что-то пошло не так :(');
    }
  }
);

export const postAddFavoriteTrack = createAsyncThunk<
void, {idTrack: number | string}, {rejectValue: string; state: RootState}>(
  'user/favorite',
  // eslint-disable-next-line consistent-return
  async ({ idTrack }, thunkApi) => {
    try {
      const store = thunkApi.getState();

      await base.post(`/catalog/track/${idTrack}/favorite/`, null, {
        headers: {
          Authorization: `Bearer ${store.user.token?.access}`,
        }
      });
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data as string);
      }

      return thunkApi.rejectWithValue('Что-то пошло не так попробуйте позже :(');
    }
  }
);
