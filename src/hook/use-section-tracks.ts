import { useEffect, useState } from 'react';

import { ISectionTracks } from '@interface/';
import { getSectionTrack } from '@api/';


export const useSectionTracks = (idSection: number | string) => {
  const [tracks, setTracks] = useState<ISectionTracks>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>('');

  useEffect(() => {
    const handlerGetSectionTracks = async () => {
      try {
        const tracksList = await getSectionTrack(idSection);
        setTracks({ ...tracksList });
        setIsLoading(false);
      } catch {
        setIsError('Возникла ошибка! Пожалуйста повторите позже!');
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    handlerGetSectionTracks();
  }, [idSection]);

  return {
    tracks,
    isLoading,
    isError,
  };
};
