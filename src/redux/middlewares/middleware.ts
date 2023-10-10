import { createListenerMiddleware } from '@reduxjs/toolkit';

import { ACTION_KEY } from './key-action';


const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  predicate: (action) => {
    if (action.type.includes(ACTION_KEY.currentTrackReducer) || action.type.includes(ACTION_KEY.playTrackReducer)) {
      console.log(action);
      return true;
    }
    return false;
  },
  effect: async (action, store) => {
    console.log(action);
  },
});

export default listenerMiddleware;
