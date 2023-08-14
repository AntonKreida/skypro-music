import { Button } from '@shared/';

import * as Styled from './Playlist.styled';
import { TableItem } from './table-item';


const mockData = [{
  id: 1,
  name: 'Название трека',
  artist: 'Имя артиста',
  album: 'Название альбома',
  time: '00:00'
}];


export const Playlist = () => (
  <Styled.PlaylistWrapper>

    <Styled.PlaylistTitle>Треки</Styled.PlaylistTitle>

    <Styled.PlaylistTableWrapper>
      <Styled.PlaylistTableFilter>
        Искать по:
        <Button text="исполнителю" type="button" />
        <Button text="году выпуска" type="button" />
        <Button text="жанру" type="button" />
      </Styled.PlaylistTableFilter>

      <Styled.PlaylistTable>
        <Styled.PlaylistTableHeader>
          <Styled.PlaylistTableRow>

            <Styled.PlaylistTableHeaderTitle>
              Трек
            </Styled.PlaylistTableHeaderTitle>

            <Styled.PlaylistTableHeaderTitle>
              Исполнители
            </Styled.PlaylistTableHeaderTitle>

            <Styled.PlaylistTableHeaderTitle>
              Альбом
            </Styled.PlaylistTableHeaderTitle>

            <Styled.PlaylistTableHeaderTitle>
              <Styled.PlaylistTableIcon />
            </Styled.PlaylistTableHeaderTitle>

          </Styled.PlaylistTableRow>
        </Styled.PlaylistTableHeader>

        <Styled.PlaylistTableBody>
          { mockData.map((item) => (
            <TableItem key={ item.id } soundtrack={ item } />
          )) }
        </Styled.PlaylistTableBody>

      </Styled.PlaylistTable>
    </Styled.PlaylistTableWrapper>
  </Styled.PlaylistWrapper>
);
