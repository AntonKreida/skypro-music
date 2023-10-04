import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { Playlist } from '@components/';
import { TParams, TITLE_PAGE, OutletContext } from '@interface/';
import { useAudioContext, useSectionTracks } from '@hook/';

import * as Styled from './Category.styled';


export const Category = () => {
  const { id } = useParams<TParams>();
  const { tracks, isLoading, isError } = useSectionTracks(id ?? 1);
  const { setIsLoading } = useOutletContext<OutletContext>();
  const { handlerInitFirstTrack } = useAudioContext();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  useEffect(() => {
    if (!isLoading && tracks) {
      handlerInitFirstTrack(tracks.items[0]);
    }
  }, [handlerInitFirstTrack, isLoading, tracks]);

  return (
    <Styled.CategoryWrapper>
      <Playlist
        isError={ isError }
        isLoading={ isLoading }
        title={ TITLE_PAGE[id ?? 1] }
        trackList={ tracks?.items || [] }
      />
    </Styled.CategoryWrapper>
  );
};
