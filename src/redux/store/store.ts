import { configureStore } from '@reduxjs/toolkit';

import { sliceAudioPlayer, sliceUserAuth } from '../slices';
import { listenerMiddleware } from '../middlewares';


export const store = configureStore({
  reducer: {
    audioplayer: sliceAudioPlayer.reducer,
    user: sliceUserAuth.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
