import { FC, useEffect } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import { baseCatalog } from '@api/';
import { useAppDispatch } from '@hook/';
import {
  getAllFavoriteTrack, postAddFavoriteTrack, postRefreshToken, postRemoveFavoriteTrack
} from '@redux/';


interface IAxiosInterceptorProps {
  children: React.ReactNode;
}


export const AxiosInterceptor: FC<IAxiosInterceptorProps> = ({ children }) => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    const resInterceptor = (response: AxiosResponse) => response;

    const errInterceptor = async (error: AxiosError) => {
      if (error.response?.status === 401) {
        const idTrack = error.config?.url?.split('/')[2];

        await dispatch(postRefreshToken());

        if (error.config?.method === 'post') {
          await dispatch(postAddFavoriteTrack({ idTrack: Number(idTrack) }));
        }

        if (error.config?.method === 'delete') {
          await dispatch(postRemoveFavoriteTrack({ idTrack: Number(idTrack) }));
        }

        if (error.config?.method === 'get') {
          await dispatch(getAllFavoriteTrack());
        }

        return Promise.reject(error);
      }

      return Promise.reject(error);
    };

    const interceptor = baseCatalog.interceptors.response.use(resInterceptor, errInterceptor);

    return () => baseCatalog.interceptors.response.eject(interceptor);
  }, [dispatch]);

  return (
    <>
      { children }
    </>
  );
};
