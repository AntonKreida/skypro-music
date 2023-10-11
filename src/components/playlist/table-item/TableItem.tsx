import {
  FC, useState, useEffect, MouseEvent
} from 'react';

import { ITrack } from '@interface/';
import { formattedTime } from '@utils/';
import { useAppDispatch, useAudioContext } from '@hook/';
import { postAddFavoriteTrack } from '@redux/';

import * as Styled from './TableItem.styled';


interface ITableItemProps {
  track: ITrack;
}

export const TableItem: FC<ITableItemProps> = ({ track }) => {
  const dispatch = useAppDispatch();

  const {
    id,
    name,
    author,
    album,
    logo,
    duration_in_seconds: time
  } = track;
  const [isErrorImg, setIsErrorImg] = useState(false);
  const {
    handlerClickPlayCurrentTrack, currentTrack, isPlay, refAudio
  } = useAudioContext();
  const [currentTime, setTime] = useState('');

  const handlerErrorImg = () => {
    setIsErrorImg(true);
  };

  const handlerClickAddFavorite = async (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(postAddFavoriteTrack({ idTrack: id }));
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

  return (
    <Styled.TableItemRowWrapper onClick={ () => {
      handlerClickPlayCurrentTrack(track);
    } }
    >
      <Styled.TableItemCell colSpan={ 1 }>

        <Styled.TableItemBox>
          <Styled.TableItemWrapperImg>
            { !isErrorImg ? <Styled.TableItemImg src={ logo ?? '' } onError={ handlerErrorImg } /> : <Styled.TableItemIconPlug /> }
            { currentTrack?.id === track.id
              && (
                <Styled.TableCurrentTrack>
                  <Styled.TableCurrentTrackPulse $isCurrentTrack={ currentTrack?.id === track.id } $isPlay={ isPlay } />
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
          <Styled.TableLikeWrapper onClick={ handlerClickAddFavorite }>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#like` } />
            </svg>
          </Styled.TableLikeWrapper>
          <Styled.TableItemTextSilenced>
            { currentTrack?.id !== track.id && formattedTime(time) }
            { currentTrack?.id === track.id && isPlay && (currentTime ?? time) }
            { currentTrack?.id === track.id && !isPlay && formattedTime(refAudio?.current?.currentTime || time) }
          </Styled.TableItemTextSilenced>
        </Styled.TableItemLastBox>
      </Styled.TableItemCell>

    </Styled.TableItemRowWrapper>
  );
};
