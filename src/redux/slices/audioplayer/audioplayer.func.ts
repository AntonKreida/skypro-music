import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { base, baseCatalog } from '@api/';
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

      return thunkApi.rejectWithValue('Что-то пошло не так :(');
    }
  }
);

export const getSectionTrackList = createAsyncThunk<ITrack[], number | string, {rejectValue: string}>(
  'audioplayer/selection',
  async (idSection, thunkApi) => {
    try {
      const { data } = await base.get<ISectionTracks>(`/catalog/selection/${idSection}/`);

      return data.items;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue('Что-то пошло не так :(');
      }

      return thunkApi.rejectWithValue('Что-то пошло не так :(');
    }
  }
);

export const postAddFavoriteTrack = createAsyncThunk<
ITrack[], {idTrack: number | string | undefined; idSection?: number | string}, {rejectValue: string; state: RootState}
>(
  'audioplayer/favorite/add',
  async ({ idTrack, idSection }, thunkApi) => {
    try {
      const store = thunkApi.getState();

      await baseCatalog.post(`/track/${idTrack}/favorite/`, null, {
        headers: {
          Authorization: `Bearer ${store.user.token?.access}`,
        }
      });

      if (idSection) {
        const { data } = await base.get<ISectionTracks>(`/catalog/selection/${idSection}/`);

        return data.items;
      }

      const { data } = await base.get<ITrack[]>('/catalog/track/all/');

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data as string);
      }

      return thunkApi.rejectWithValue('Что-то пошло не так попробуйте позже :(');
    }
  }
);

export const postRemoveFavoriteTrack = createAsyncThunk<
ITrack[], {idTrack: number | string | undefined; idSection?: number | string}, {rejectValue: string; state: RootState}
>(
  'audioplayer/favorite/remove',
  async ({ idTrack, idSection }, thunkApi) => {
    try {
      const store = thunkApi.getState();

      await baseCatalog.delete(`/track/${idTrack}/favorite/`, {
        headers: {
          Authorization: `Bearer ${store.user.token?.access}`,
        }
      });

      if (idSection) {
        const { data } = await base.get<ISectionTracks>(`/catalog/selection/${idSection}/`);

        return data.items;
      }

      const { data } = await base.get<ITrack[]>('/catalog/track/all/');

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data as string);
      }

      return thunkApi.rejectWithValue('Что-то пошло не так попробуйте позже :(');
    }
  }
);

export const getAllFavoriteTrack = createAsyncThunk<ITrack[], undefined, {rejectValue: string; state: RootState}>(
  'audioplayer/favorite/all',
  async (_, thunkApi) => {
    const store = thunkApi.getState();

    try {
      const { data } = await baseCatalog.get<ITrack[]>('/track/favorite/all/', {
        headers: {
          Authorization: `Bearer ${store.user.token?.access}`,
        },
      });

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data);
      }

      return thunkApi.rejectWithValue('Что-то пошло не так :(');
    }
  }
);
