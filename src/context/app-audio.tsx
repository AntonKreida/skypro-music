import {
  createContext, ReactNode, FC, useRef, useMemo, useState, useCallback
} from 'react';


interface IAudioContext {
  isPlay: boolean;
  handlerInitFirstTrack: (src: string, nameTrack: string) => void;
  handlerPlayCurrentTrack: (src: string, nameTrack: string) => void;
  handlerPlayTrack: () => void;
}

interface IAppAudioContext {
  children: ReactNode;
}


export const AudioContext = createContext<IAudioContext>({
  isPlay: false,
  handlerInitFirstTrack: () => null,
  handlerPlayCurrentTrack: () => null,
  handlerPlayTrack: () => null,
});

export const AppAudioContext: FC<IAppAudioContext> = ({ children }) => {
  const refAudio = useRef<HTMLAudioElement>(null);
  const [isPlay, setIsPlay] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('');

  const handlerInitFirstTrack = useCallback((src: string, nameTrack: string) => {
    setCurrentTrack(nameTrack);
    refAudio.current?.setAttribute('src', src);
  }, []);

  const handlerPlayCurrentTrack = useCallback((src: string, nameTrack: string) => {
    setCurrentTrack(nameTrack);

    if (nameTrack !== currentTrack && !isPlay) {
      setIsPlay(true);
      refAudio.current?.setAttribute('src', src);
      refAudio.current?.play();
      return;
    }

    if (nameTrack === currentTrack && isPlay) {
      setIsPlay(false);
      refAudio.current?.pause();
      return;
    }

    if (nameTrack === currentTrack && !isPlay) {
      setIsPlay(true);
      refAudio.current?.play();
      return;
    }

    setIsPlay(true);
    refAudio.current?.setAttribute('src', src);
    refAudio.current?.play();
  }, [currentTrack, isPlay]);

  const handlerPlayTrack = useCallback(() => {
    if (isPlay) {
      setIsPlay(false);
      refAudio.current?.pause();
      return;
    }

    setIsPlay(true);
    refAudio.current?.play();
  }, [isPlay]);

  const context = useMemo(() => ({
    isPlay,
    handlerInitFirstTrack,
    handlerPlayCurrentTrack,
    handlerPlayTrack,
  }
  ), [handlerInitFirstTrack, handlerPlayCurrentTrack, handlerPlayTrack, isPlay]);

  return (
    <AudioContext.Provider value={ context }>
      <audio ref={ refAudio } src="" />
      { children }
    </AudioContext.Provider>
  );
};
