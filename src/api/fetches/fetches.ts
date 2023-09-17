import { ITrack } from '@/interface';

import { base } from '../base';


export const getAllTrack = async () => {
  const { data } = await base.get<ITrack[]>('/catalog/track/all/');

  return data;
};
