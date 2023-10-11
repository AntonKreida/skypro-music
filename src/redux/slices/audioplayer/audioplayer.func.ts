import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { base } from '@api/';
import { ISectionTracks, ITrack } from '@interface/';


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
      const { data } = await base.get<ISectionTracks>(`/catalog/selection/${idSection}/`);

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        return thunkApi.rejectWithValue(error.response?.data);
      }

      return thunkApi.rejectWithValue('default');
    }
  }
);
