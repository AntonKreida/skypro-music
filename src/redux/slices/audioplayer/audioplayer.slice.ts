import { createSlice, PayloadAction } from '@reduxjs/toolkit';


import { ITrack } from '@interface/';

import {
  getAllFavoriteTrack,
  getMainTrackList, getSectionTrackList, postAddFavoriteTrack, postRemoveFavoriteTrack,
} from './audioplayer.func';


interface IInitState {
  isPlay: boolean;
  trackList: ITrack[];
  searchTrackList: ITrack[];
  currentTrackList: ITrack[];
  currentPathnameTrackList: string | null;
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
  searchTrackList: [],
  currentTrackList: [],
  currentPathnameTrackList: null,
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
    handlerCurrentTrack: (store, action: PayloadAction<{track: ITrack; pathname: string}>) => {
      if (store.currentPathnameTrackList !== action.payload.pathname) {
        store.currentTrackList = store.searchTrackList;
      }

      if (action.payload.track.name !== store.currentTrack?.name && !store.isPlay) {
        store.currentPathnameTrackList = action.payload.pathname;
        store.currentTrack = action.payload.track;
        store.isPlay = true;
        return;
      }

      if (action.payload.track.name === store.currentTrack?.name && store.isPlay) {
        store.currentPathnameTrackList = action.payload.pathname;
        store.currentTrack = action.payload.track;
        store.isPlay = false;
        return;
      }

      if (action.payload.track.name === store.currentTrack?.name && !store.isPlay) {
        store.currentPathnameTrackList = action.payload.pathname;
        store.currentTrack = action.payload.track;
        store.isPlay = true;
        return;
      }

      store.currentPathnameTrackList = action.payload.pathname;
      store.currentTrack = action.payload.track;
      store.isPlay = true;
    },
    handlerPlayTrack: (store, action: PayloadAction<boolean>) => {
      store.isPlay = action.payload;
    },
    handlerBackTrack: (store) => {
      if (!store.isShuffle) {
        const index = store.currentTrackList.findIndex((track) => track.name === store.currentTrack?.name);

        if (index === 0) {
          store.currentTrack = store.currentTrackList[store.currentTrackList.length - 1];
          return;
        }

        store.currentTrack = store.currentTrackList[index - 1];
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
        const index = store.currentTrackList.findIndex((track) => track.name === store.currentTrack?.name);

        if (index === store.trackList.length - 1) {
          const [firstTrack] = store.currentTrackList;
          store.currentTrack = firstTrack;
          return;
        }

        store.currentTrack = store.currentTrackList[index + 1];
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
      const index = store.currentTrackList.findIndex((track) => track.name === store.currentTrack?.name);

      if (index === store.currentTrackList.length - 1) {
        store.isPlay = true;

        const [firstTrack] = store.currentTrackList;
        store.currentTrack = firstTrack;
        return;
      }

      store.isPlay = true;
      store.currentTrack = store.currentTrackList[index + 1];
    },
    handlerShuffle: (store) => {
      store.isShuffle = !store.isShuffle;

      if (store.isShuffle) {
        const trackListForShuffle = [...store.currentTrackList];

        store.shuffleList = trackListForShuffle.sort(() => Math.random() - 0.5)
          .filter((track) => track.name !== store.currentTrack?.name);

        store.shuffleList.unshift(store.currentTrack as ITrack);
      }
    },
    handlerSearchTrack: (store, action: PayloadAction<string>) => {
      const listForSearch = [...store.trackList];

      const result = listForSearch.filter((track) => track?.name.toLowerCase().startsWith(action.payload.toLowerCase())
      || track?.author.toLowerCase().startsWith(action.payload.toLowerCase())
      || track?.name.toLowerCase().startsWith(action.payload.toLowerCase()));

      store.searchTrackList = result;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getMainTrackList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = null;
      state.trackList = action.payload;
      state.searchTrackList = action.payload;
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
      state.searchTrackList = action.payload;
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
      state.currentTrackList = action.payload;
      state.shuffleList = action.payload;
      state.searchTrackList = action.payload;
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
  handlerSearchTrack,
} = sliceAudioPlayer.actions;
