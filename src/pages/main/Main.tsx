import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Playlist } from '@components/';
import { useAudioContext, useTrack } from '@hook/';
import { OutletContext } from '@interface/';

import * as Styled from './Main.styled';


export const MainPage = () => {
  const { tracks, isLoading, isError } = useTrack();
  const { setIsLoading } = useOutletContext<OutletContext>();
  const { handlerInitFirstTrack, setIsListTrack } = useAudioContext();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (!isLoading) {
      handlerInitFirstTrack(tracks[0]);
      setIsListTrack(tracks);
    }
  }, [handlerInitFirstTrack, isLoading, setIsListTrack, tracks]);

  return (
    <Styled.MainWrapper>
      <Playlist
        isError={ isError }
        isLoading={ isLoading }
        title="Треки"
        trackList={ tracks }
      />
    </Styled.MainWrapper>
  );
};
