import { FC, useEffect } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import { base } from '@api/';
import { useAppDispatch } from '@hook/';
import { postAddFavoriteTrack, postRefreshToken } from '@redux/';


interface IAxiosInterceptorProps {
  children: React.ReactNode;
}


export const AxiosInterceptor: FC<IAxiosInterceptorProps> = ({ children }) => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    const resInterceptor = (response: AxiosResponse) => response;

    const errInterceptor = async (error: AxiosError) => {
      if (error.response?.status === 401) {
        const idTrack = error.config?.url?.split('/')[3];

        await dispatch(postRefreshToken());
        await dispatch(postAddFavoriteTrack({ idTrack: Number(idTrack) }));

        return null;
      }

      return Promise.reject(error);
    };

    const interceptor = base.interceptors.response.use(resInterceptor, errInterceptor);

    return () => base.interceptors.response.eject(interceptor);
  }, [dispatch]);

  return (
    <>
      { children }
    </>
  );
};
