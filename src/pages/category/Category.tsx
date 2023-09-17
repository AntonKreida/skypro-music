import { useParams } from 'react-router-dom';

import { Playlist } from '@components/';
import { TParams, TITLE_PAGE } from '@interface/';

import * as Styled from './Category.styled';


export const Category = () => {
  const { id } = useParams<TParams>();

  return (
    <Styled.CategoryWrapper>
      <Playlist title={ TITLE_PAGE[id ?? 1] } trackList={ [] } />
    </Styled.CategoryWrapper>
  );
};
