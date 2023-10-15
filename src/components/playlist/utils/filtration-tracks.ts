import { ITrack } from '@/interface';


interface IFilter {
  name: string;
  activeOptions: string[];
}

export const sortTracks = (trackList: ITrack[], activeSort: string) => trackList?.sort((a, b) => {
  if (activeSort === 'old' && new Date(a.release_date) < new Date(b.release_date)) {
    return -1;
  }

  if (activeSort === 'new' && new Date(a.release_date) > new Date(b.release_date)) {
    return -1;
  }


  return 0;
});

export const filtrationTracks = (trackList: ITrack[], filter: IFilter) => trackList?.filter((item) => {
  if (filter.activeOptions.length === 0) {
    return item;
  }

  if (filter.activeOptions.includes('Неизвестный исполнитель')) {
    return item.author === '-';
  }

  return filter.activeOptions.includes(item.genre) || filter.activeOptions.includes(item.author);
});
