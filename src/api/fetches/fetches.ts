import { isAxiosError } from 'axios';

import {
  IDataForm, ISectionTracks, ITrack, IUserCreateResponse
} from '@interface/';

import { base } from '../base';


export const postSigUpUser = async (dataForm: IDataForm) => {
  try {
    await base.post<IUserCreateResponse>('/user/signup/', { ...dataForm }, {
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data;
    }
    throw Error('Что-то пошло не так попробуйте позже...');
  }
};


export const getAllTrack = async () => {
  const { data } = await base.get<ITrack[]>('/catalog/track/all/');

  return data;
};

export const getSectionTrack = async (idSection: number | string) => {
  const { data } = await base.get<ISectionTracks>(`/catalog/selection/${idSection}/`);

  return data;
};
