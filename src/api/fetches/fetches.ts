import { isAxiosError } from 'axios';

import {
  IDataFormCreateUser, IDataFormLoginUser, ISectionTracks, ITrack, IUserCreateResponse, IUserLoginResponse
} from '@interface/';

import { base } from '../base';


export const postLoginUser = async (dataForm: IDataFormLoginUser) => {
  try {
    const { data } = await base.post<IUserLoginResponse>('/user/login/', { ...dataForm }, {
      headers: { 'content-type': 'application/json' },
    });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw Error('Что-то пошло не так попробуйте позже...');
  }
};

export const postSigUpUser = async (dataForm: IDataFormCreateUser) => {
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
