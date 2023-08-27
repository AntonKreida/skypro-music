import { useState } from 'react';

import * as Styled from './Playlist.styled';
import { TableItem, TableItemSkeleton } from './table-item';
import { FilterDropdown } from './ui';


const mockData = [
  {
    id: 1,
    name: 'Название трека',
    artist: 'Имя артиста',
    album: 'Название альбома',
    time: '00:00'
  },
];


export const Playlist = () => {
  const [filter, setFilter] = useState('');

  return (
    <Styled.PlaylistWrapper>

      <Styled.PlaylistTitle>Треки</Styled.PlaylistTitle>

      <Styled.PlaylistTableWrapper>
        <Styled.PlaylistTableFilter>
          Искать по:
          <FilterDropdown
            dataInfo="performer"
            filter={ filter }
            setFilter={ setFilter }
            textButton="исполнителю"
          />
          <FilterDropdown
            dataInfo="genre"
            filter={ filter }
            setFilter={ setFilter }
            textButton="жанру"
          />
          <FilterDropdown
            dataInfo="year"
            filter={ filter }
            setFilter={ setFilter }
            textButton="году"
          />
        </Styled.PlaylistTableFilter>

        <Styled.PlaylistTableBox>
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
              <TableItemSkeleton />
            </Styled.PlaylistTableBody>

          </Styled.PlaylistTable>
        </Styled.PlaylistTableBox>
      </Styled.PlaylistTableWrapper>
    </Styled.PlaylistWrapper>
  );
};
