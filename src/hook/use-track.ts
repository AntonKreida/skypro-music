import { useState, useEffect } from 'react';

import { ITrack } from '@/interface';
import { getAllTrack } from '@api/';


export const useTrack = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>('');

  useEffect(() => {
    const handlerGetAllTracks = async () => {
      try {
        const tracksList = await getAllTrack();
        setIsLoading(false);

        setTracks([...tracksList]);
      } catch {
        setIsLoading(false);
        setIsError('Возникла ошибка! Пожалуйста повторите позже');
      }
    };

    handlerGetAllTracks();
  }, []);

  return {
    tracks,
    isLoading,
    isError,
  };
};
