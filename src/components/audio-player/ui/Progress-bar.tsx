import { FC } from 'react';

import * as Styled from './Progress-bar.styled';


interface ITimeTrack {
  progress: number;
  length: number;
}


interface IProgressBar {
  progress: number;
  refAudio: React.RefObject<HTMLAudioElement>;
  timeTrack: ITimeTrack;
}


export const ProgressBar: FC<IProgressBar> = ({ progress, refAudio, timeTrack }) => {
  const handlerClickProgressBar = (event: React.MouseEvent<HTMLDivElement>) => {
    const { duration } = (refAudio.current as HTMLAudioElement);
    const width = event.currentTarget.clientWidth;
    const offset = event.nativeEvent.offsetX;

    const divProgress = (offset / width) * 100;
    (refAudio.current as HTMLAudioElement).currentTime = (divProgress / 100) * (timeTrack.length || duration);
  };


  return (

    <Styled.ProgressBarWrapper onClick={ handlerClickProgressBar }>
      <Styled.ProgressBarBand $progress={ progress } />
    </Styled.ProgressBarWrapper>
  );
};
