import { Playlist } from '@components/';

import * as Styled from './Favorites.styled';


export const Favorites = () => (
  <Styled.FavoritesWrapper>
    <Playlist title="фавориты" trackList={ [] } />
  </Styled.FavoritesWrapper>
);
