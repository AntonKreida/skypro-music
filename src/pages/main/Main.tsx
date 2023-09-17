import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Playlist } from '@components/';
import { useTrack } from '@hook/';
import { OutletContext } from '@interface/';

import * as Styled from './Main.styled';


export const MainPage = () => {
  const { tracks, isLoading, isError } = useTrack();
  const { setIsLoading } = useOutletContext<OutletContext>();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

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
