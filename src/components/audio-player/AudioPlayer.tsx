import { useState } from 'react';

import * as Styled from './AudioPlayer.styled';


export const AudioPlayer = () => {
  const [valueRange, setValueRange] = useState('50');


  const handlerOnChangeValueRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setValueRange(currentTarget.value);
  };

  return (
    <Styled.AudioPlayerWrapper>

      <Styled.AudioPlayerProgress />

      <Styled.AudioPlayerControllerWrapper>
        <Styled.AudioPlayerPanel>

          <Styled.AudioPlayerButton>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#prev` } />
            </svg>
          </Styled.AudioPlayerButton>
          <Styled.AudioPlayerButton>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#play` } />
            </svg>
          </Styled.AudioPlayerButton>
          <Styled.AudioPlayerButton>
            <svg>
              <use href={ `${process.env.PUBLIC_URL}/assets/icon/icons.svg#next` } />
            </svg>
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
            <Styled.AudioPlayerInfoIconSkeleton />
            <Styled.AudioPlayerInfoTextWrapper>
              <Styled.AudioPlayerInfoTextSkeleton />
              <Styled.AudioPlayerInfoText>
                Исполнитель
              </Styled.AudioPlayerInfoText>
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
