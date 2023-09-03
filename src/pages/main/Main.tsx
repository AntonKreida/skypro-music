import { Playlist } from '@components/';

import * as Styled from './Main.styled';


const mockData = {
  title: 'Треки',
  trackList: [{
    id: 1,
    name: 'Название трека',
    artist: 'Имя артиста',
    album: 'Название альбома',
    time: '00:00'
  }]
};


export const MainPage = () => (
  <Styled.MainWrapper>
    <Playlist catalog={ mockData } />
  </Styled.MainWrapper>
);