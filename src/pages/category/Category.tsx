import { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

import { Playlist } from '@components/';
import { TParams, TITLE_PAGE, OutletContext } from '@interface/';
import { useSectionTracks } from '@hook/';

import * as Styled from './Category.styled';


export const Category = () => {
  const { id } = useParams<TParams>();
  const { tracks, isLoading, isError } = useSectionTracks(id ?? 1);
  const { setIsLoading } = useOutletContext<OutletContext>();


  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

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
