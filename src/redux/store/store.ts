import { configureStore } from '@reduxjs/toolkit';

import { sliceAudioPlayer } from '../slices';


export const store = configureStore({
  reducer: {
    audioplayer: sliceAudioPlayer.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
