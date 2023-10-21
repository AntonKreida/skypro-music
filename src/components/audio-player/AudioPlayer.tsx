/* eslint-disable import/max-dependencies */
import { useEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector, useAudioContext } from '@hook/';
import { ReactComponent as Pause } from '@assets/icon/Pause.svg';
import { ReactComponent as Play } from '@assets/icon/Play.svg';
import { ReactComponent as Next } from '@assets/icon/Next.svg';
import { ReactComponent as Prev } from '@assets/icon/Prev.svg';
import { ReactComponent as Loop } from '@assets/icon/Loop.svg';
import { ReactComponent as Volume } from '@assets/icon/Volume.svg';
import { ReactComponent as Case } from '@assets/icon/Case.svg';
import { ReactComponent as Like } from '@assets/icon/Like.svg';
import {
  getStateUser, postAddFavoriteTrack, postGetTrackId, postRemoveFavoriteTrack
} from '@redux/';
import { TParams } from '@interface/';

import * as Styled from './AudioPlayer.styled';
import { ProgressBar } from './ui/Progress-bar';


interface ITimeTrack {
  progress: number;
  length: number;
}

const routes = {
  favorite: '/skypro-music/favorites',
};


export const AudioPlayer = () => {
  const [valueRange, setValueRange] = useState('100');
  const [isErrorImg, setIsErrorImg] = useState(false);
  const [timeTrack, setTimeTrack] = useState<ITimeTrack>({ progress: 0, length: 0 });
  const {
    isPlay,
    refAudio,
    isLoop,
    isShuffle,
    handleLoopTrack,
    handlerVolumeAudio,
    handlerPlayClickTrack,
    handlerClickBackTrack,
    handlerClickNextTrack,
    currentTrack,
    handlerShuffleClick,
  } = useAudioContext();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector(getStateUser);
  const [isLike, setIsLike] = useState(false);
  const { id } = useParams<TParams>();
  const matches = useMatch(routes.favorite);

  const handlerClickAddFavorite = async () => {
    await dispatch(postAddFavoriteTrack(
      { idTrack: currentTrack?.id, idSection: id, isFavorite: matches?.pattern.end }
    ));
    await dispatch(postGetTrackId(currentTrack?.id));
    setIsLike(true);
  };

  const handlerClickRemoveFavorite = async () => {
    await dispatch(postRemoveFavoriteTrack(
      { idTrack: currentTrack?.id, idSection: id, isFavorite: matches?.pattern.end }
    ));
    await dispatch(postGetTrackId(currentTrack?.id));
    setIsLike(false);
  };


  const handlerOnChangeValueRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    handlerVolumeAudio(currentTarget.value);
    setValueRange(currentTarget.value);
  };

  const handlerClickOffAndOnVolume = () => {
    if (refAudio?.current && refAudio?.current?.volume === 0) {
      handlerVolumeAudio(String(100));
      setValueRange(String(100));
      return;
    }

    handlerVolumeAudio(String(0));
    setValueRange(String(0));
  };

  const handlerErrorImg = () => {
    setIsErrorImg(true);
  };

  useEffect(() => {
    setIsErrorImg(false);
  }, [refAudio]);

  useEffect(() => {
    let audio: HTMLAudioElement;

    const handlerTimeTrack = (event: Event) => {
      const { currentTime, duration } = event.currentTarget as HTMLAudioElement;
      setTimeTrack({ progress: (currentTime / duration) * 100, length: duration });
    };

    if (refAudio?.current) {
      audio = refAudio.current;

      refAudio.current.addEventListener('timeupdate', handlerTimeTrack);
    }

    return () => {
      audio?.removeEventListener('timeupdate', handlerTimeTrack);
    };
  }, [refAudio]);


  useEffect(() => {
    if (user && currentTrack) {
      setIsLike(currentTrack.stared_user?.some((itemUser) => itemUser.id === user.id));
    }
  }, [user, currentTrack?.stared_user, currentTrack]);

  return (
    <Styled.AudioPlayerWrapper $isLoading={ !currentTrack }>

      { refAudio?.current && (
        <ProgressBar progress={ timeTrack.progress } refAudio={ refAudio } timeTrack={ timeTrack } />
      ) }

      <Styled.AudioPlayerControllerWrapper>
        <Styled.AudioPlayerPanel>

          <Styled.AudioPlayerButton onClick={ handlerClickBackTrack }>
            <Prev />
          </Styled.AudioPlayerButton>
          <Styled.AudioPlayerButton onClick={ handlerPlayClickTrack }>
            { !isPlay && <Play /> }
            { isPlay && <Pause /> }
          </Styled.AudioPlayerButton>
          <Styled.AudioPlayerButton onClick={ handlerClickNextTrack }>
            <Next />
          </Styled.AudioPlayerButton>

          <Styled.AudioPlayerButtonControl $isLoop={ isLoop } onClick={ handleLoopTrack }>
            <Loop />
          </Styled.AudioPlayerButtonControl>

          <Styled.AudioPlayerButtonCase $isRandom={ isShuffle } onClick={ handlerShuffleClick }>
            <Case />
          </Styled.AudioPlayerButtonCase>

          <Styled.AudioPlayerInfoWrapper>


            { (isErrorImg) && (
              <Styled.AudioPlayerInfoIconWrapper>
                <Styled.AudioPlayerInfoIconPlug />
              </Styled.AudioPlayerInfoIconWrapper>
            ) }
            { (!isErrorImg) && (
              <Styled.AudioPlayerInfoIconWrapper>
                <Styled.AudioPlayerInfoImg src={ currentTrack?.logo ?? 'error' } onError={ handlerErrorImg } />
              </Styled.AudioPlayerInfoIconWrapper>
            ) }


            <Styled.AudioPlayerInfoTextWrapper>
              { currentTrack && (
                <Styled.AudioPlayerInfoText>
                  { currentTrack ? currentTrack.name : '' }
                </Styled.AudioPlayerInfoText>
              ) }
              { currentTrack && (
                <Styled.AudioPlayerInfoText>
                  { currentTrack ? currentTrack.author : '' }
                </Styled.AudioPlayerInfoText>
              ) }
            </Styled.AudioPlayerInfoTextWrapper>
          </Styled.AudioPlayerInfoWrapper>

          { !isLike && (
            <Styled.AudioPlayerButtonLike onClick={ handlerClickAddFavorite }>
              <Like />
            </Styled.AudioPlayerButtonLike>
          ) }
          { isLike && (
            <Styled.AudioPlayerButtonLike $isLike={ isLike } onClick={ handlerClickRemoveFavorite }>
              <Like />
            </Styled.AudioPlayerButtonLike>
          ) }

        </Styled.AudioPlayerPanel>
      </Styled.AudioPlayerControllerWrapper>

      <Styled.AudioPlayerControllerWrapper>

        <Styled.AudioPlayerPanel>
          <Styled.AudioPlayerButtonVolume
            $isVolume={ valueRange !== '0' }
            onClick={ handlerClickOffAndOnVolume }
          >
            <Volume className="volume" />
          </Styled.AudioPlayerButtonVolume>
          <Styled.AudioPlayerInputRange
            max={ 100 }
            min={ 0 }
            type="range"
            value={ valueRange }
            onChange={ handlerOnChangeValueRange }
          />
        </Styled.AudioPlayerPanel>
      </Styled.AudioPlayerControllerWrapper>
    </Styled.AudioPlayerWrapper>
  );
};
