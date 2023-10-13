import { useCallback } from 'react';

import { handlerSearchTrack } from '@redux/';

import { useAppDispatch } from './use-app-dispatch-and-selector';


export const useSearchTrack = () => {
  const dispatch = useAppDispatch();

  const handlerInputSearchTrack = useCallback((search: string) => {
    dispatch(handlerSearchTrack(search));
  }, [dispatch]);

  return {
    handlerInputSearchTrack,
  };
};
