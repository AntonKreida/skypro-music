import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { Playlist } from '@components/';
import { TParams, TITLE_PAGE, OutletContext } from '@interface/';
import {
  useAppDispatch, useAppSelector,
} from '@hook/';
import { getSectionTrackList, getStateAudioPlayer } from '@redux/';

import * as Styled from './Category.styled';


export const Category = () => {
  const { id } = useParams<TParams>();
  const dispatch = useAppDispatch();
  const { searchTrackList, isError, isLoading } = useAppSelector(getStateAudioPlayer);

  const { setIsLoading } = useOutletContext<OutletContext>();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    dispatch(getSectionTrackList(id ?? 1));
  }, [dispatch, id]);

  return (
    <Styled.CategoryWrapper>
      <Playlist
        isError={ isError }
        isLoading={ isLoading }
        title={ TITLE_PAGE[id ?? 1] }
        trackList={ searchTrackList }
      />
    </Styled.CategoryWrapper>
  );
};
