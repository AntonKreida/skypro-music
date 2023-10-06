import { ISectionTracks, ITrack } from '@/interface';

import { base } from '../base';


export const getAllTrack = async () => {
  const { data } = await base.get<ITrack[]>('/catalog/track/all/');

  return data;
};

export const getSectionTrack = async (idSection: number | string) => {
  const { data } = await base.get<ISectionTracks>(`/catalog/selection/${idSection}/`);

  return data;
};
