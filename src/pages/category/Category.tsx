import { useParams } from 'react-router-dom';

import { Playlist } from '@components/';
import { TParams, TITLE_PAGE } from '@interface/';

import * as Styled from './Category.styled';


const mockData = {
  trackList: [{
    id: 1,
    name: 'Название трека',
    artist: 'Имя артиста',
    album: 'Название альбома',
    time: '00:00'
  }]
};

export const Category = () => {
  const { id } = useParams<TParams>();

  return (
    <Styled.CategoryWrapper>
      <Playlist title={ TITLE_PAGE[id ?? 1] } trackList={ mockData.trackList } />
    </Styled.CategoryWrapper>
  );
};
