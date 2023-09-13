import { FC, useState } from 'react';

import { ISoundTrack } from '@interface/';

import * as Styled from './Playlist.styled';
import { TableItem } from './table-item';
import { FilterDropdown } from './ui';


interface IPlaylistProps {
  title: string;
  trackList: ISoundTrack[];
}


export const Playlist: FC<IPlaylistProps> = ({ trackList, title }) => {
  const [filter, setFilter] = useState('');

  return (
    <Styled.PlaylistWrapper>

      <Styled.PlaylistTitle>{ title }</Styled.PlaylistTitle>

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
              { trackList?.map((item) => (
                <TableItem key={ item.id } soundtrack={ item } />
              )) }
            </Styled.PlaylistTableBody>

          </Styled.PlaylistTable>
        </Styled.PlaylistTableBox>
      </Styled.PlaylistTableWrapper>
    </Styled.PlaylistWrapper>
  );
};
