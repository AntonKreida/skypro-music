import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { ITrack } from '@/interface';

import { getMainTrackList, getSectionTrackList } from './audioplayer.func';


interface IInitState {
  isPlay: boolean;
  token: string | null;
  trackList: ITrack[];
  shuffleList: ITrack[];
  currentTrack: ITrack | null;
  isLoading: boolean;
  error: string | null;
  isShuffle: boolean;
}

const initialState: IInitState = {
  isPlay: false,
  token: null,
  trackList: [],
  shuffleList: [],
  currentTrack: null,
  isLoading: false,
  error: null,
  isShuffle: false,
};


export const sliceAudioPlayer = createSlice({
  name: 'audioplayer/slice',
  initialState,
  reducers: {
    handlerCurrentTrack: (store, action: PayloadAction<ITrack>) => {
      if (action.payload.name !== store.currentTrack?.name && !store.isPlay) {
        store.currentTrack = action.payload;
        store.isPlay = true;
        return;
      }

      if (action.payload.name === store.currentTrack?.name && store.isPlay) {
        store.currentTrack = action.payload;
        store.isPlay = false;
        return;
      }

      if (action.payload.name === store.currentTrack?.name && !store.isPlay) {
        store.currentTrack = action.payload;
        store.isPlay = true;
        return;
      }

      store.currentTrack = action.payload;
      store.isPlay = true;
    },
    handlerPlayTrack: (store, action: PayloadAction<boolean>) => {
      store.isPlay = action.payload;
    },
    handlerBackTrack: (store) => {
      if (!store.isShuffle) {
        const index = store.trackList.findIndex((track) => track.name === store.currentTrack?.name);

        if (index === 0) {
          store.currentTrack = store.trackList[store.trackList.length - 1];
          return;
        }

        store.currentTrack = store.trackList[index - 1];
        return;
      }

      const index = store.shuffleList.findIndex((track) => track.name === store.currentTrack?.name);

      if (index === 0) {
        store.currentTrack = store.shuffleList[store.shuffleList.length - 1];
        return;
      }

      store.currentTrack = store.shuffleList[index - 1];
    },
    handlerNextTrack: (store) => {
      if (!store.isShuffle) {
        const index = store.trackList.findIndex((track) => track.name === store.currentTrack?.name);

        if (index === store.trackList.length - 1) {
          const [firstTrack] = store.trackList;
          store.currentTrack = firstTrack;
          return;
        }

        store.currentTrack = store.trackList[index + 1];
        return;
      }

      const index = store.shuffleList.findIndex((track) => track.name === store.currentTrack?.name);

      if (index === store.shuffleList.length - 1) {
        const [firstTrack] = store.shuffleList;
        store.currentTrack = firstTrack;
      }

      store.currentTrack = store.shuffleList[index + 1];
    },
    handlerEndTrack: (store) => {
      const index = store.trackList.findIndex((track) => track.name === store.currentTrack?.name);

      if (index === store.trackList.length - 1) {
        store.isPlay = true;

        const [firstTrack] = store.trackList;
        store.currentTrack = firstTrack;
        return;
      }

      store.isPlay = true;
      store.currentTrack = store.trackList[index + 1];
    },
    handlerShuffle: (store) => {
      store.isShuffle = !store.isShuffle;

      if (store.isShuffle) {
        store.shuffleList = store.shuffleList.sort(() => Math.random() - 0.5)
          .filter((track) => track.name !== store.currentTrack?.name);

        store.shuffleList.unshift(store.currentTrack as ITrack);
      }
    },
    resetToken: (store) => {
      store.token = '1234567890';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMainTrackList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.trackList = action.payload;
      state.shuffleList = action.payload;
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

export const {
  handlerCurrentTrack,
  handlerPlayTrack,
  handlerBackTrack,
  handlerNextTrack,
  handlerEndTrack,
  handlerShuffle,
  resetToken,
} = sliceAudioPlayer.actions;
