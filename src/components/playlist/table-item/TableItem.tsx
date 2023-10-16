import {
  FC, useState, useEffect, MouseEvent,
} from 'react';
import { useParams, useMatch, useLocation } from 'react-router-dom';

import { ReactComponent as Like } from '@assets/icon/Like.svg';
import { ITrack, TParams } from '@interface/';
import { formattedTime } from '@utils/';
import { useAppDispatch, useAppSelector, useAudioContext } from '@hook/';
import { getStateUser, postAddFavoriteTrack, postRemoveFavoriteTrack } from '@redux/';

import * as Styled from './TableItem.styled';


const routes = {
  favorite: '/skypro-music/favorites',
};

interface ITableItemProps {
  track: ITrack;
}

export const TableItem: FC<ITableItemProps> = ({ track }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(getStateUser);
  const params = useParams<TParams>();
  const matches = useMatch(routes.favorite);
  const location = useLocation();

  const {
    id: idTrack,
    name,
    author,
    album,
    logo,
    duration_in_seconds: time,
    stared_user: userList,
  } = track;
  const [isErrorImg, setIsErrorImg] = useState(true);
  const [isLike, setIsLike] = useState(false);
  const {
    handlerClickPlayCurrentTrack, currentTrack, isPlay, refAudio, currentPathnameTrackList
  } = useAudioContext();
  const [currentTime, setTime] = useState('');

  const handlerErrorImg = () => {
    setIsErrorImg(false);
  };

  const handlerClickAddFavorite = async (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(postAddFavoriteTrack({ idTrack, idSection: params?.id, isFavorite: matches?.pattern.end }));
  };

  const handlerClickRemoveFavorite = async (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(postRemoveFavoriteTrack({ idTrack, idSection: params?.id, isFavorite: matches?.pattern.end }));
  };

  useEffect(() => {
    let idInterval: NodeJS.Timer;

    setTime(formattedTime(refAudio?.current?.currentTime || 0));

    if (currentTrack?.id === track.id && isPlay) {
      idInterval = setInterval(() => {
        setTime(formattedTime(refAudio?.current?.currentTime || 0));
      }, 1000);
    }


    return () => {
      clearInterval(idInterval as NodeJS.Timer);
      setTime('0:00');
    };
  }, [currentTrack?.id, isPlay, refAudio, track.id]);

  useEffect(() => {
    if (user) {
      setIsLike(!!(userList?.some((itemUser) => itemUser.id === user.id) || matches));
    }
  }, [matches, user, userList]);

  return (
    <Styled.TableItemRowWrapper onClick={ () => {
      handlerClickPlayCurrentTrack(track, location.pathname);
    } }
    >
      <Styled.TableItemCell colSpan={ 1 }>

        <Styled.TableItemBox>
          <Styled.TableItemWrapperImg>
            { !isErrorImg ? <Styled.TableItemImg src={ logo ?? '' } onError={ handlerErrorImg } /> : <Styled.TableItemIconPlug /> }
            { currentTrack?.id === track.id && currentPathnameTrackList === location.pathname
              && (
                <Styled.TableCurrentTrack>
                  <Styled.TableCurrentTrackPulse
                    $isCurrentTrack={ currentTrack?.id === track.id }
                    $isPlay={ (isPlay && currentPathnameTrackList === location.pathname) }
                  />
                </Styled.TableCurrentTrack>
              ) }
          </Styled.TableItemWrapperImg>
          <Styled.TableItemText>
            { name }
          </Styled.TableItemText>
        </Styled.TableItemBox>

      </Styled.TableItemCell>

      <Styled.TableItemCell colSpan={ 2 }>
        <Styled.TableItemText>
          { author }
        </Styled.TableItemText>
      </Styled.TableItemCell>

      <Styled.TableItemCell colSpan={ 3 }>
        <Styled.TableItemTextSilenced>
          { album }
        </Styled.TableItemTextSilenced>
      </Styled.TableItemCell>

      <Styled.TableItemCell colSpan={ 4 }>
        <Styled.TableItemLastBox>
          { !isLike && !matches && (
            <Styled.TableLikeWrapper onClick={ handlerClickAddFavorite }>
              <Like />
            </Styled.TableLikeWrapper>
          ) }
          { (isLike || matches) && (
            <Styled.TableLikeWrapper $isLike={ isLike } onClick={ handlerClickRemoveFavorite }>
              <Like />
            </Styled.TableLikeWrapper>
          ) }
          <Styled.TableItemTextSilenced>
            { (currentTrack?.id !== track.id || currentPathnameTrackList !== location.pathname) && formattedTime(time) }
            { currentTrack?.id === track.id && isPlay
              && currentPathnameTrackList === location.pathname && (currentTime ?? time) }
            { currentTrack?.id === track.id && !isPlay
              && currentPathnameTrackList === location.pathname
              && formattedTime(refAudio?.current?.currentTime || time) }
          </Styled.TableItemTextSilenced>
        </Styled.TableItemLastBox>
      </Styled.TableItemCell>

    </Styled.TableItemRowWrapper>
  );
};
