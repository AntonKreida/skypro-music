import {
  createContext, ReactNode, FC, useRef, useMemo, useState, useCallback, useEffect
} from 'react';

import { ITrack } from '@/interface';


interface IAudioContext {
  isPlay: boolean;
  isLoop: boolean;
  isRandom: boolean;
  currentTrack: ITrack | null | undefined;
  handlerInitFirstTrack: (track: ITrack) => void;
  handlerPlayCurrentTrack: (track: ITrack) => void;
  handlerPlayTrack: () => void;
  handleLoopTrack: () => void;
  handlerVolumeAudio: (volume: string) => void;
  handlerNextTrack: () => void;
  handlerBackTrack: () => void;
  setIsListTrack: React.Dispatch<React.SetStateAction<ITrack[]>>;
  setIsRandom: React.Dispatch<React.SetStateAction<boolean>>;
  refAudio: React.RefObject<HTMLAudioElement> | null;
}

interface IAppAudioContext {
  children: ReactNode;
}


export const AudioContext = createContext<IAudioContext>({
  isPlay: false,
  isLoop: false,
  isRandom: false,
  currentTrack: null,
  handlerInitFirstTrack: () => null,
  handlerPlayCurrentTrack: () => null,
  handlerPlayTrack: () => null,
  handleLoopTrack: () => null,
  handlerVolumeAudio: () => null,
  setIsListTrack: () => null,
  setIsRandom: () => null,
  handlerNextTrack: () => null,
  handlerBackTrack: () => null,
  refAudio: null,
});

export const AppAudioContext: FC<IAppAudioContext> = ({ children }) => {
  const refAudio = useRef<HTMLAudioElement>(null);
  const [isPlay, setIsPlay] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [prevRandomNumber, setPrevRandomNumber] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<ITrack | null>();
  const [listTrack, setIsListTrack] = useState<ITrack[]>([]);

  const handlerInitFirstTrack = useCallback((track: ITrack) => {
    setCurrentTrack({ ...track });
    refAudio.current?.setAttribute('src', track.track_file);
  }, []);

  const handlerPlayCurrentTrack = useCallback((track: ITrack) => {
    setCurrentTrack({ ...track });

    if (track.name !== currentTrack?.name && !isPlay) {
      setIsPlay(false);
      refAudio.current?.setAttribute('src', track.track_file);
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    if (track.name === currentTrack?.name && isPlay) {
      setIsPlay(false);
      refAudio.current?.play().then(() => {
        refAudio.current?.pause();
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    if (track.name === currentTrack?.name && !isPlay) {
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    refAudio.current?.load();
    refAudio.current?.setAttribute('src', track.track_file);
    refAudio.current?.play().then(() => {
      setIsPlay(true);
    }).catch(() => {
      setIsPlay(false);
    });
  }, [currentTrack, isPlay]);

  const handlerPlayTrack = useCallback(() => {
    if (isPlay) {
      setIsPlay(false);
      refAudio.current?.pause();
      return;
    }

    refAudio.current?.play().then(() => {
      setIsPlay(true);
    }).catch(() => {
      setIsPlay(false);
    });
  }, [isPlay]);

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

  const handlerBackTrack = useCallback(() => {
    const index = listTrack.findIndex((track) => track.name === currentTrack?.name);

    if (index === 0) {
      setCurrentTrack(listTrack[listTrack.length - 1]);
      refAudio.current?.setAttribute('src', listTrack[listTrack.length - 1].track_file);
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    setCurrentTrack(listTrack[index - 1]);
    refAudio.current?.setAttribute('src', listTrack[index - 1].track_file);
    refAudio.current?.play().then(() => {
      setIsPlay(true);
    }).catch(() => {
      setIsPlay(false);
    });

    if (refAudio.current) {
      refAudio.current.currentTime = 0;
    }
  }, [currentTrack?.name, listTrack]);

  const handlerNextTrack = useCallback(() => {
    const index = listTrack.findIndex((track) => track.name === currentTrack?.name);

    if (index === listTrack.length - 1) {
      setCurrentTrack(listTrack[0]);
      refAudio.current?.setAttribute('src', listTrack[0].track_file);
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    setCurrentTrack(listTrack[index + 1]);
    refAudio.current?.setAttribute('src', listTrack[index + 1].track_file);
    refAudio.current?.play().then(() => {
      setIsPlay(true);
    }).catch(() => {
      setIsPlay(false);
    });

    if (refAudio.current) {
      refAudio.current.currentTime = 0;
    }
  }, [currentTrack?.name, listTrack]);

  const handlerEndTrack = () => {
    if (isPlay && !isRandom) {
      const index = listTrack.findIndex((track) => track.name === currentTrack?.name);

      if (index === listTrack.length - 1) {
        setCurrentTrack(listTrack[0]);
        refAudio.current?.setAttribute('src', listTrack[0].track_file);
        refAudio.current?.play().then(() => {
          setIsPlay(true);
        }).catch(() => {
          setIsPlay(false);
        });
        return;
      }

      setCurrentTrack(listTrack[index + 1]);
      refAudio.current?.setAttribute('src', listTrack[index + 1].track_file);
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });

      if (refAudio.current) {
        refAudio.current.currentTime = 0;
      }
    }

    if (isPlay && isRandom) {
      const randomNumber = Math.floor(Math.random() * listTrack.length);

      if (prevRandomNumber === randomNumber) {
        const newRandomNumber = randomNumber === 0 ? randomNumber + 1 : randomNumber - 1;
        setPrevRandomNumber(newRandomNumber);
        setCurrentTrack(listTrack[newRandomNumber]);

        refAudio.current?.setAttribute('src', listTrack[newRandomNumber].track_file);
        refAudio.current?.play().then(() => {
          setIsPlay(true);
        }).catch(() => {
          setIsPlay(false);
        });

        return;
      }

      setPrevRandomNumber(randomNumber);
      setCurrentTrack(listTrack[randomNumber]);

      refAudio.current?.setAttribute('src', listTrack[randomNumber].track_file);
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });
    }
  };

  useEffect(() => {
    const handlerPlayHeadset = () => {
      setIsPlay(true);
    };

    const handlerPauseHeadset = () => {
      setIsPlay(false);
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
  }, [refAudio]);

  const context = useMemo(() => ({
    isPlay,
    isLoop,
    isRandom,
    handlerInitFirstTrack,
    handlerPlayCurrentTrack,
    handlerPlayTrack,
    refAudio,
    handleLoopTrack,
    handlerVolumeAudio,
    setIsListTrack,
    setIsRandom,
    handlerBackTrack,
    handlerNextTrack,
    currentTrack,
  }
  ), [
    handlerBackTrack,
    handlerInitFirstTrack,
    handlerNextTrack,
    handlerPlayCurrentTrack,
    handlerPlayTrack,
    isLoop,
    isPlay,
    isRandom,
    currentTrack,
  ]);

  return (
    <AudioContext.Provider value={ context }>
      <audio ref={ refAudio } src="" onEnded={ handlerEndTrack } />
      { children }
    </AudioContext.Provider>
  );
};
