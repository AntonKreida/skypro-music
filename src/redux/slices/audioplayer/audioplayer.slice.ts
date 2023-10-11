import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { ITrack } from '@interface/';

import {
  getAllFavoriteTrack,
  getMainTrackList, getSectionTrackList, postAddFavoriteTrack, postRemoveFavoriteTrack,
} from './audioplayer.func';


interface IInitState {
  isPlay: boolean;
  trackList: ITrack[];
  shuffleList: ITrack[];
  currentTrack: ITrack | null;
  isLoading: boolean;
  isError: string | null;
  isErrorAddFavorite: string | null;
  isShuffle: boolean;
}

const initialState: IInitState = {
  isPlay: false,
  trackList: [],
  shuffleList: [],
  currentTrack: null,
  isLoading: false,
  isError: null,
  isErrorAddFavorite: null,
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
  },
  extraReducers: (builder) => {
    builder.addCase(getMainTrackList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.trackList = action.payload;
      state.shuffleList = action.payload;
    });
    builder.addCase(getMainTrackList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMainTrackList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload ?? 'Что-то пошло не так :(';
    });
    builder.addCase(getSectionTrackList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.trackList = action.payload;
    });
    builder.addCase(getSectionTrackList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSectionTrackList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload ?? 'Что-то пошло не так :(';
    });
    builder.addCase(postAddFavoriteTrack.fulfilled, (state, action) => {
      state.trackList = action.payload;
      state.isErrorAddFavorite = null;
    });
    builder.addCase(postAddFavoriteTrack.rejected, (state, action) => {
      state.isErrorAddFavorite = action.payload ?? 'Что-то пошло не так :(';
    });
    builder.addCase(postRemoveFavoriteTrack.fulfilled, (state, action) => {
      state.trackList = action.payload;
      state.isErrorAddFavorite = null;
    });
    builder.addCase(postRemoveFavoriteTrack.rejected, (state, action) => {
      state.isErrorAddFavorite = action.payload ?? 'Что-то пошло не так :(';
    });
    builder.addCase(getAllFavoriteTrack.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.trackList = action.payload;
      state.shuffleList = action.payload;
    });
    builder.addCase(getAllFavoriteTrack.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllFavoriteTrack.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload ?? 'Что-то пошло не так :(';
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
} = sliceAudioPlayer.actions;
