import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Playlist } from '@components/';
import { useAppDispatch, useAppSelector } from '@hook/';
import { getAllFavoriteTrack, getStateAudioPlayer } from '@redux/';
import { OutletContext } from '@interface/';

import * as Styled from './Favorites.styled';


export const Favorites = () => {
  const dispatch = useAppDispatch();
  const { searchTrackList, isError, isLoading } = useAppSelector(getStateAudioPlayer);

  const { setIsLoading } = useOutletContext<OutletContext>();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    dispatch(getAllFavoriteTrack());
  }, [dispatch]);

  return (
    <Styled.FavoritesWrapper>
      <Playlist
        isError={ isError }
        isLoading={ isLoading }
        title="Мои треки"
        trackList={ searchTrackList }
      />
    </Styled.FavoritesWrapper>
  );
};
