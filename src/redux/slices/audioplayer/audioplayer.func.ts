import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, isAxiosError } from 'axios';

import { base, baseCatalog } from '@api/';
import { ISectionTracks, ITrack } from '@interface/';

import type { RootState } from '@redux/';


export const getMainTrackList = createAsyncThunk<
ITrack[],
undefined,
{ rejectValue: string }
>('audioplayer/main', async (_, thunkApi) => {
  try {
    const { data } = await base.get<ITrack[]>('/catalog/track/all/');

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return thunkApi.rejectWithValue(error.response?.data);
    }

    return thunkApi.rejectWithValue('Что-то пошло не так :(');
  }
});

export const getSectionTrackList = createAsyncThunk<
ITrack[],
number | string,
{ rejectValue: string }
>('audioplayer/selection', async (idSection, thunkApi) => {
  try {
    const { data } = await base.get<ISectionTracks>(
      `/catalog/selection/${idSection}/`,
    );

    return data.items;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      return thunkApi.rejectWithValue('Что-то пошло не так :(');
    }

    return thunkApi.rejectWithValue('Что-то пошло не так :(');
  }
});

export const postAddFavoriteTrack = createAsyncThunk<
ITrack[],
{
  idTrack: number | string | undefined;
  idSection?: number | string;
  isFavorite?: boolean;
},
{ rejectValue: string; state: RootState }
>(
  'audioplayer/favorite/add',
  async ({ idTrack, idSection, isFavorite }, thunkApi) => {
    try {
      const store = thunkApi.getState();

      await baseCatalog.post(`/track/${idTrack}/favorite/`, null, {
        headers: {
          Authorization: `Bearer ${store.user.token?.access}`,
        },
      });

      if (idSection) {
        const { data } = await base.get<ISectionTracks>(
          `/catalog/selection/${idSection}/`,
        );

        return data.items;
      }

      if (isFavorite) {
        const { data } = await baseCatalog.get<ITrack[]>(
          '/track/favorite/all/',
          {
            headers: {
              Authorization: `Bearer ${store.user.token?.access}`,
            },
          },
        );

        return data;
      }

      const { data } = await base.get<ITrack[]>('/catalog/track/all/');

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data as string);
      }

      return thunkApi.rejectWithValue(
        'Что-то пошло не так попробуйте позже :(',
      );
    }
  },
);

export const postRemoveFavoriteTrack = createAsyncThunk<
ITrack[],
{
  idTrack: number | string | undefined;
  idSection?: number | string;
  isFavorite?: boolean;
},
{ rejectValue: string; state: RootState }
>(
  'audioplayer/favorite/remove',
  async ({ idTrack, idSection, isFavorite }, thunkApi) => {
    try {
      const store = thunkApi.getState();

      await baseCatalog.delete(`/track/${idTrack}/favorite/`, {
        headers: {
          Authorization: `Bearer ${store.user.token?.access}`,
        },
      });

      if (idSection) {
        const { data } = await base.get<ISectionTracks>(
          `/catalog/selection/${idSection}/`,
        );

        return data.items;
      }

      if (isFavorite) {
        const { data } = await baseCatalog.get<ITrack[]>(
          '/track/favorite/all/',
          {
            headers: {
              Authorization: `Bearer ${store.user.token?.access}`,
            },
          },
        );

        return data;
      }

      const { data } = await base.get<ITrack[]>('/catalog/track/all/');

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data as string);
      }

      return thunkApi.rejectWithValue(
        'Что-то пошло не так попробуйте позже :(',
      );
    }
  },
);

export const getAllFavoriteTrack = createAsyncThunk<
AxiosError | ITrack[],
undefined,
{ rejectValue: string | 401; state: RootState }
>('audioplayer/favorite/all', async (_, thunkApi) => {
  const store = thunkApi.getState();

  try {
    const { data, status } = await baseCatalog.get<AxiosError | ITrack[]>(
      '/track/favorite/all/',
      {
        headers: {
          Authorization: `Bearer ${store.user.token?.access}`,
        },
      },
    );

    if (status === 401) {
      throw Error('error!');
    }

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      if (error.response?.status === 401) {
        return thunkApi.rejectWithValue(401);
      }

      return thunkApi.rejectWithValue(error.response?.data.detail);
    }

    return thunkApi.rejectWithValue('Что-то пошло не так :(');
  }
});

export const postGetTrackId = createAsyncThunk<ITrack, number | string | undefined, {rejectValue: string}>(
  'audioplayer/track',
  async (id, thunkApi) => {
    try {
      const { data } = await base.get<ITrack>(`/catalog/track/${id}`);

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data.message);
      }

      return thunkApi.rejectWithValue('Что-то пошло не так :(');
    }
  }
);
