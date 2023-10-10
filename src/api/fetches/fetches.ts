import { isAxiosError } from 'axios';

import {
  ISectionTracks,
  ITokenResponse,
} from '@interface/';

import { base } from '../base';


export const getSectionTrack = async (idSection: number | string) => {
  const { data } = await base.get<ISectionTracks>(`/catalog/selection/${idSection}/`);

  return data;
};

export const postGetToken = async (dataUser: {password: string; email: string}) => {
  try {
    const { data } = await base.post<ITokenResponse>('/user/token/', { ...dataUser }, {
      headers: { 'content-type': 'application/json' },
    });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
    throw Error('Что-то пошло не так попробуйте позже...');
  }
};
