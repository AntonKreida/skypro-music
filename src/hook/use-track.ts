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
        setTracks([...tracksList]);
        setIsLoading(false);
      } catch {
        setIsError('Возникла ошибка! Пожалуйста повторите позже');
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    handlerGetAllTracks();
  }, []);

  return {
    tracks,
    isLoading,
    isError,
  };
};
