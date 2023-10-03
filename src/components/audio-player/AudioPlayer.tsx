import {
  FC, useEffect, useState
} from 'react';

import { useAudioContext } from '@hook/';
import { ReactComponent as Pause } from '@assets/icon/Pause.svg';
import { ReactComponent as Play } from '@assets/icon/Play.svg';
import { ReactComponent as Next } from '@assets/icon/Next.svg';
import { ReactComponent as Prev } from '@assets/icon/Prev.svg';

import * as Styled from './AudioPlayer.styled';


interface ITimeTrack {
  progress: number;
  length: number;
}


interface IAudioPlayer {
  isLoading: boolean;
}


export const AudioPlayer: FC<IAudioPlayer> = ({ isLoading }) => {
  const [valueRange, setValueRange] = useState('50');
  const [timeTrack, setTimeTrack] = useState<ITimeTrack>({ progress: 0, length: 0 });
  const { handlerPlayTrack, isPlay, refAudio } = useAudioContext();


  const handlerOnChangeValueRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setValueRange(currentTarget.value);
  };


  useEffect(() => {
    let audio: HTMLAudioElement;

    const handlerTimeTrack = (event: any) => {
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
    <Styled.AudioPlayerWrapper $isLoading={ isLoading }>

      <Styled.AudioPlayerProgressWrapper>
        <Styled.AudioPlayerProgress $progress={ timeTrack.progress } />
      </Styled.AudioPlayerProgressWrapper>

      <Styled.AudioPlayerControllerWrapper>
        <Styled.AudioPlayerPanel>

          <Styled.AudioPlayerButton>
            <Prev />
          </Styled.AudioPlayerButton>
          <Styled.AudioPlayerButton onClick={ handlerPlayTrack }>
            { !isPlay && <Play /> }
            { isPlay && <Pause /> }
          </Styled.AudioPlayerButton>
          <Styled.AudioPlayerButton>
            <Next />
          </Styled.AudioPlayerButton>

          <Styled.AudioPlayerButton>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#loop` } />
            </svg>
          </Styled.AudioPlayerButton>
          <Styled.AudioPlayerButton>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#case` } />
            </svg>
          </Styled.AudioPlayerButton>

          <Styled.AudioPlayerInfoWrapper>

            { !isLoading ? (
              <Styled.AudioPlayerInfoIconWrapper />
            ) : <Styled.AudioPlayerInfoIconSkeleton /> }

            <Styled.AudioPlayerInfoTextWrapper>
              { !isLoading ? (
                <Styled.AudioPlayerInfoText>
                  Трек
                </Styled.AudioPlayerInfoText>
              ) : (
                <Styled.AudioPlayerInfoTextSkeleton />
              ) }
              { !isLoading ? (
                <Styled.AudioPlayerInfoText>
                  Исполнитель
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
          <Styled.AudioPlayerButton>
            <svg className="volume">
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#volume` } />
            </svg>
          </Styled.AudioPlayerButton>
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
