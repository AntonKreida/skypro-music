import { createSlice } from '@reduxjs/toolkit';

import { ITrack } from '@/interface';

import { getMainTrackList, getSectionTrackList } from './audioplayer.func';


interface IInitState {
  trackList: ITrack[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IInitState = {
  trackList: [],
  isLoading: false,
  error: null
};


export const sliceAudioPlayer = createSlice({
  name: 'audioplayer/slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMainTrackList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.trackList = action.payload;
    });
    builder.addCase(getMainTrackList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMainTrackList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? 'default';
    });
    builder.addCase(getSectionTrackList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.trackList = action.payload.items;
    });
    builder.addCase(getSectionTrackList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSectionTrackList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? 'default';
    });
  },
});
