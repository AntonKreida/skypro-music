import {
  FC, useState, useMemo, useCallback
} from 'react';
import { useMatch } from 'react-router-dom';

import { ITrack } from '@interface/';
import { useAppSelector } from '@hook/';
import { getStateAudioPlayer } from '@redux/';

import * as Styled from './Playlist.styled';
import { TableItem, TableItemSkeleton } from './table-item';
import { MenuFilterDropdown, MenuSortDropdown } from './ui';
import { filtrationTracks, sortTracks } from './utils';


const routes = {
  favorite: '/skypro-music/favorites',
};

interface IPlaylistProps {
  title: string;
  trackList: ITrack[];
  isLoading?: boolean;
  isError?: string | null;
}

export interface IFilterState {
  name: string;
  activeOptions: string[];
}


export const Playlist: FC<IPlaylistProps> = ({
  trackList, title, isLoading, isError
}) => {
  const [isActiveMenu, setIsActiveMenu] = useState('');
  const [activeSort, setActiveSort] = useState('');
  const [filter, setFilter] = useState<IFilterState>({
    name: '',
    activeOptions: [],
  });
  const matches = useMatch(routes.favorite);
  const { searchTrackList: trackListForFilter } = useAppSelector(getStateAudioPlayer);

  const filterMenusOptions = useMemo(() => {
    const performerOptions = Array.from(new Set([...trackListForFilter.map((track) => {
      if (track.author === '-') {
        return 'Неизвестный исполнитель';
      }

      return track.author;
    })]));
    const genreOptions = Array.from(new Set([...trackListForFilter.map((track) => track.genre)]));

    return {
      performerOptions,
      genreOptions,
    };
  }, [trackListForFilter]);

  const handlerClickOption = useCallback((option: string) => {
    if (filter.activeOptions.includes(option)) {
      setFilter({ ...filter, activeOptions: filter.activeOptions.filter((item) => item !== option) });
      return;
    }

    setFilter({ ...filter, activeOptions: [...filter.activeOptions, option] });
  }, [filter, setFilter]);

  return (
    <Styled.PlaylistWrapper>

      <Styled.PlaylistTitle>{ title }</Styled.PlaylistTitle>

      <Styled.PlaylistTableWrapper>
        { !matches && (
          <Styled.PlaylistTableFilter>
            Искать по:
            <MenuFilterDropdown
              dataInfo="author"
              filter={ filter }
              handlerClickOption={ handlerClickOption }
              isActiveMenu={ isActiveMenu }
              options={ filterMenusOptions.performerOptions }
              setFilter={ setFilter }
              setIsActiveMenu={ setIsActiveMenu }
              textButton="исполнителю"
            />
            <MenuFilterDropdown
              dataInfo="genre"
              filter={ filter }
              handlerClickOption={ handlerClickOption }
              isActiveMenu={ isActiveMenu }
              options={ filterMenusOptions.genreOptions }
              setFilter={ setFilter }
              setIsActiveMenu={ setIsActiveMenu }
              textButton="жанру"
            />
            <MenuSortDropdown
              activeSort={ activeSort }
              dataInfo="year"
              isActiveMenu={ isActiveMenu }
              setActiveSort={ setActiveSort }
              setIsActiveMenu={ setIsActiveMenu }
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
              { (!isLoading && !isError) && sortTracks(filtrationTracks(trackList, filter), activeSort).map((track) => (
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
