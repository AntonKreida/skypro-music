import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Playlist } from '@components/';
import { useAudioContext, useTrack } from '@hook/';
import { OutletContext } from '@interface/';

import * as Styled from './Main.styled';


export const MainPage = () => {
  const { tracks, isLoading, isError } = useTrack();
  const { setIsLoading } = useOutletContext<OutletContext>();
  const { handlerInitFirstTrack } = useAudioContext();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (!isLoading) {
      handlerInitFirstTrack(tracks[0].track_file, tracks[0].name);
    }
  }, [handlerInitFirstTrack, isLoading, tracks]);

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
