import { Playlist } from '@components/';

import * as Styled from './Favorites.styled';


const mockData = {
  title: 'Мои треки',
  trackList: [{
    id: 1,
    name: 'Название трека',
    artist: 'Имя артиста',
    album: 'Название альбома',
    time: '00:00'
  }]
};


export const Favorites = () => (
  <Styled.FavoritesWrapper>
    <Playlist catalog={ mockData } />
  </Styled.FavoritesWrapper>
);
