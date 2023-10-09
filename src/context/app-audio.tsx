import {
  createContext, ReactNode, FC, useRef, useMemo, useState, useCallback, useEffect
} from 'react';

import { ITrack } from '@interface/';
import {
  getStateAudioPlayer,
  handlerCurrentTrack,
  handlerPlayTrack,
  handlerBackTrack,
  handlerNextTrack,
  handlerEndTrack,
  handlerShuffle
} from '@redux/';

import { useAppDispatch, useAppSelector } from '../hook/use-app-dispatch-and-selector';


interface IAudioContext {
  isPlay: boolean;
  isLoop: boolean;
  isShuffle: boolean;
  currentTrack: ITrack | null | undefined;
  handlerPlayClickTrack: () => void;
  handleLoopTrack: () => void;
  handlerVolumeAudio: (volume: string) => void;
  handlerClickPlayCurrentTrack: (track: ITrack) => void;
  handlerClickBackTrack: () => void;
  handlerClickNextTrack: () => void;
  handlerShuffleClick: () => void;
  refAudio: React.RefObject<HTMLAudioElement> | null;
}

interface IAppAudioContext {
  children: ReactNode;
}


export const AudioContext = createContext<IAudioContext>({
  isPlay: false,
  isLoop: false,
  isShuffle: false,
  currentTrack: null,
  handlerPlayClickTrack: () => null,
  handleLoopTrack: () => null,
  handlerVolumeAudio: () => null,
  handlerClickPlayCurrentTrack: () => null,
  handlerClickBackTrack: () => null,
  handlerClickNextTrack: () => null,
  handlerShuffleClick: () => null,
  refAudio: null,
});

export const AppAudioContext: FC<IAppAudioContext> = ({ children }) => {
  const refAudio = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const { isPlay, currentTrack, isShuffle } = useAppSelector(getStateAudioPlayer);
  const [isLoop, setIsLoop] = useState(false);

  const handlerClickPlayCurrentTrack = useCallback((track: ITrack) => {
    dispatch(handlerCurrentTrack(track));
  }, [dispatch]);

  const handleLoopTrack = () => {
    if (!refAudio.current?.hasAttribute('loop')) {
      setIsLoop(true);
      refAudio.current?.setAttribute('loop', '');
      return;
    }

    refAudio.current?.removeAttribute('loop');
    setIsLoop(false);
  };

  const handlerVolumeAudio = (volume: string) => {
    (refAudio.current as HTMLAudioElement).volume = Number(volume) / 100;
  };

  const handlerPlayClickTrack = useCallback(() => {
    if (isPlay) {
      dispatch(handlerPlayTrack(false));
      return;
    }

    dispatch(handlerPlayTrack(true));
  }, [dispatch, isPlay]);

  const handlerClickBackTrack = useCallback(() => {
    dispatch(handlerBackTrack());

    if (refAudio.current) {
      refAudio.current.currentTime = 0;
    }
  }, [dispatch]);


  const handlerClickNextTrack = useCallback(() => {
    dispatch(handlerNextTrack());

    if (refAudio.current) {
      refAudio.current.currentTime = 0;
    }
  }, [dispatch]);

  const handlerEndAudio = useCallback(() => {
    dispatch(handlerEndTrack());
  }, [dispatch]);

  const handlerShuffleClick = useCallback(() => {
    dispatch(handlerShuffle());
  }, [dispatch]);


  //
  // const handlerEndTrack = () => {
  //   if (isPlay && !isRandom) {
  //     const index = listTrack.findIndex((track) => track.name === currentTrack?.name);
  //
  //     if (index === listTrack.length - 1) {
  //       setCurrentTrack(listTrack[0]);
  //       refAudio.current?.setAttribute('src', listTrack[0].track_file);
  //       refAudio.current?.play().then(() => {
  //         setIsPlay(true);
  //       }).catch(() => {
  //         setIsPlay(false);
  //       });
  //       return;
  //     }
  //
  //     setCurrentTrack(listTrack[index + 1]);
  //     refAudio.current?.setAttribute('src', listTrack[index + 1].track_file);
  //     refAudio.current?.play().then(() => {
  //       setIsPlay(true);
  //     }).catch(() => {
  //       setIsPlay(false);
  //     });
  //
  //     if (refAudio.current) {
  //       refAudio.current.currentTime = 0;
  //     }
  //   }
  //
  //   if (isPlay && isRandom) {
  //     const randomNumber = Math.floor(Math.random() * listTrack.length);
  //
  //     if (prevRandomNumber === randomNumber) {
  //       const newRandomNumber = randomNumber === 0 ? randomNumber + 1 : randomNumber - 1;
  //       setPrevRandomNumber(newRandomNumber);
  //       setCurrentTrack(listTrack[newRandomNumber]);
  //
  //       refAudio.current?.setAttribute('src', listTrack[newRandomNumber].track_file);
  //       refAudio.current?.play().then(() => {
  //         setIsPlay(true);
  //       }).catch(() => {
  //         setIsPlay(false);
  //       });
  //
  //       return;
  //     }
  //
  //     setPrevRandomNumber(randomNumber);
  //     setCurrentTrack(listTrack[randomNumber]);
  //
  //     refAudio.current?.setAttribute('src', listTrack[randomNumber].track_file);
  //     refAudio.current?.play().then(() => {
  //       setIsPlay(true);
  //     }).catch(() => {
  //       setIsPlay(false);
  //     });
  //   }
  // };

  useEffect(() => {
    const handlerPlayHeadset = () => {
      dispatch(handlerPlayTrack(true));
    };

    const handlerPauseHeadset = () => {
      dispatch(handlerPlayTrack(false));
    };

    if (refAudio.current) {
      refAudio.current.addEventListener('play', handlerPlayHeadset);
      refAudio.current.addEventListener('pause', handlerPauseHeadset);
    }


    return () => {
      refAudio.current?.removeEventListener('pause', handlerPauseHeadset);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      refAudio.current?.removeEventListener('play', handlerPlayHeadset);
    };
  }, [dispatch, refAudio, isPlay]);

  useEffect(() => {
    if (isPlay) {
      refAudio.current?.play().then(() => {
        dispatch(handlerPlayTrack(true));
      }).catch(() => {
        dispatch(handlerPlayTrack(false));
      });

      return;
    }

    refAudio.current?.pause();
  }, [currentTrack, dispatch, isPlay]);

  const context = useMemo(() => ({
    isPlay,
    isLoop,
    isShuffle,
    handlerClickPlayCurrentTrack,
    handlerPlayClickTrack,
    handlerClickBackTrack,
    handlerClickNextTrack,
    handleLoopTrack,
    handlerVolumeAudio,
    handlerShuffleClick,
    refAudio,
    currentTrack,
  }
  ), [
    isPlay,
    isLoop,
    isShuffle,
    currentTrack,
    handlerClickPlayCurrentTrack,
    handlerPlayClickTrack,
    handlerClickNextTrack,
    handlerClickBackTrack,
    handlerShuffleClick,
  ]);

  return (
    <AudioContext.Provider value={ context }>
      <audio ref={ refAudio } src={ currentTrack?.track_file } onEnded={ handlerEndAudio } />
      { children }
    </AudioContext.Provider>
  );
};
