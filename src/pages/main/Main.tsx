import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Playlist } from '@components/';
import {
  useAppDispatch, useAppSelector,
} from '@hook/';
import { OutletContext } from '@interface/';
import { getStateAudioPlayer, getMainTrackList } from '@redux/';

import * as Styled from './Main.styled';


export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { trackList, isError, isLoading } = useAppSelector(getStateAudioPlayer);

  const { setIsLoading } = useOutletContext<OutletContext>();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    dispatch(getMainTrackList());
  }, [dispatch]);

  return (
    <Styled.MainWrapper>
      <Playlist
        isError={ isError }
        isLoading={ isLoading }
        title="Треки"
        trackList={ trackList }
      />
    </Styled.MainWrapper>
  );
};
