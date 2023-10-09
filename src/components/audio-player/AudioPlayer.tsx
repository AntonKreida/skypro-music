/* eslint-disable import/max-dependencies */
import {
  FC, useEffect, useState
} from 'react';

import { useAudioContext } from '@hook/';
import { ReactComponent as Pause } from '@assets/icon/Pause.svg';
import { ReactComponent as Play } from '@assets/icon/Play.svg';
import { ReactComponent as Next } from '@assets/icon/Next.svg';
import { ReactComponent as Prev } from '@assets/icon/Prev.svg';
import { ReactComponent as Loop } from '@assets/icon/Loop.svg';
import { ReactComponent as Volume } from '@assets/icon/Volume.svg';
import { ReactComponent as Case } from '@assets/icon/Case.svg';

import * as Styled from './AudioPlayer.styled';
import { ProgressBar } from './ui';


interface ITimeTrack {
  progress: number;
  length: number;
}


interface IAudioPlayer {
  isLoading: boolean;
}


export const AudioPlayer: FC<IAudioPlayer> = ({ isLoading }) => {
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

  return (
    <Styled.AudioPlayerWrapper $isLoading={ isLoading || !currentTrack }>

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


            { (!isLoading && isErrorImg) && (
              <Styled.AudioPlayerInfoIconWrapper>
                <Styled.AudioPlayerInfoIconPlug />
              </Styled.AudioPlayerInfoIconWrapper>
            ) }
            { (!isLoading && !isErrorImg) && (
              <Styled.AudioPlayerInfoIconWrapper>
                <Styled.AudioPlayerInfoImg src={ currentTrack?.logo ?? '' } onError={ handlerErrorImg } />
              </Styled.AudioPlayerInfoIconWrapper>
            ) }
            { isLoading && <Styled.AudioPlayerInfoIconSkeleton /> }


            <Styled.AudioPlayerInfoTextWrapper>
              { !isLoading ? (
                <Styled.AudioPlayerInfoText>
                  { currentTrack ? currentTrack.name : '' }
                </Styled.AudioPlayerInfoText>
              ) : (
                <Styled.AudioPlayerInfoTextSkeleton />
              ) }
              { !isLoading ? (
                <Styled.AudioPlayerInfoText>
                  { currentTrack ? currentTrack.author : '' }
                </Styled.AudioPlayerInfoText>
              ) : (
                <Styled.AudioPlayerInfoTextSkeleton />
              ) }
            </Styled.AudioPlayerInfoTextWrapper>
          </Styled.AudioPlayerInfoWrapper>

          <Styled.AudioPlayerButton>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#like` } />
            </svg>
          </Styled.AudioPlayerButton>

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
