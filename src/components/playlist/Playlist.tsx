import { FC, useState, useMemo } from 'react';
import { useMatch } from 'react-router-dom';

import { ITrack } from '@interface/';
import { useAppSelector } from '@hook/';
import { getStateAudioPlayer } from '@redux/';

import * as Styled from './Playlist.styled';
import { TableItem, TableItemSkeleton } from './table-item';
import { FilterDropdown } from './ui';


const routes = {
  favorite: '/skypro-music/favorites',
};

interface IPlaylistProps {
  title: string;
  trackList: ITrack[];
  isLoading?: boolean;
  isError?: string | null;
}


export const Playlist: FC<IPlaylistProps> = ({
  trackList, title, isLoading, isError
}) => {
  const [filter, setFilter] = useState('');
  const matches = useMatch(routes.favorite);
  const { trackList: trackListForFilter } = useAppSelector(getStateAudioPlayer);

  const filterMenusOptions = useMemo(() => {
    const genreOptions = Array.from(new Set([...trackListForFilter.map((track) => track.genre)]));
    const performerOptions = Array.from(new Set([...trackListForFilter.map((track) => track.author)]));
    const yearOptions = Array.from(new Set([...trackListForFilter.map((track) => track.release_date?.slice(0, 4))]));

    return {
      genreOptions,
      performerOptions,
      yearOptions
    };
  }, [trackListForFilter]);

  return (
    <Styled.PlaylistWrapper>

      <Styled.PlaylistTitle>{ title }</Styled.PlaylistTitle>

      <Styled.PlaylistTableWrapper>
        { !matches && (
          <Styled.PlaylistTableFilter>
            Искать по:
            <FilterDropdown
              dataInfo="performer"
              filter={ filter }
              options={ filterMenusOptions.performerOptions }
              setFilter={ setFilter }
              textButton="исполнителю"
            />
            <FilterDropdown
              dataInfo="genre"
              filter={ filter }
              options={ filterMenusOptions.genreOptions }
              setFilter={ setFilter }
              textButton="жанру"
            />
            <FilterDropdown
              dataInfo="year"
              filter={ filter }
              options={ filterMenusOptions.yearOptions }
              setFilter={ setFilter }
              textButton="году"
            />
          </Styled.PlaylistTableFilter>
        ) }

        <Styled.PlaylistTableBox>
          <Styled.PlaylistTable>
            <Styled.PlaylistTableHeader>
              <Styled.PlaylistTableRow>

                <Styled.PlaylistTableHeaderTitle colSpan={ 1 }>
                  Трек
                </Styled.PlaylistTableHeaderTitle>

                <Styled.PlaylistTableHeaderTitle colSpan={ 2 }>
                  Исполнители
                </Styled.PlaylistTableHeaderTitle>

                <Styled.PlaylistTableHeaderTitle colSpan={ 3 }>
                  Альбом
                </Styled.PlaylistTableHeaderTitle>

                <Styled.PlaylistTableHeaderTitle colSpan={ 4 }>
                  <Styled.PlaylistTableLastHeader>
                    <Styled.PlaylistTableIcon />
                  </Styled.PlaylistTableLastHeader>
                </Styled.PlaylistTableHeaderTitle>

              </Styled.PlaylistTableRow>
            </Styled.PlaylistTableHeader>

            <Styled.PlaylistTableBody>
              { isLoading && (
                [1, 2, 3].map((item) => (
                  <TableItemSkeleton key={ item } />
                ))
              ) }
              { (!isLoading && !isError) && trackList?.map((track) => (
                <TableItem key={ track.id } track={ track } />
              )) }
              { (!isLoading && isError) && (
                <Styled.PlaylistErrorHolder>
                  { isError }
                </Styled.PlaylistErrorHolder>
              ) }
            </Styled.PlaylistTableBody>

          </Styled.PlaylistTable>
        </Styled.PlaylistTableBox>
      </Styled.PlaylistTableWrapper>
    </Styled.PlaylistWrapper>
  );
};
