import {
  createContext, ReactNode, FC, useRef, useMemo, useState, useCallback
} from 'react';


interface IAudioContext {
  isPlay: boolean;
  handlerInitFirstTrack: (src: string, nameTrack: string) => void;
  handlerPlayCurrentTrack: (src: string, nameTrack: string) => void;
  handlerPlayTrack: () => void;
  refAudio: React.RefObject<HTMLAudioElement> | null;
}

interface IAppAudioContext {
  children: ReactNode;
}


export const AudioContext = createContext<IAudioContext>({
  isPlay: false,
  handlerInitFirstTrack: () => null,
  handlerPlayCurrentTrack: () => null,
  handlerPlayTrack: () => null,
  refAudio: null,
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
      setIsPlay(false);
      refAudio.current?.setAttribute('src', src);
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    if (nameTrack === currentTrack && isPlay) {
      setIsPlay(false);
      refAudio.current?.play().then(() => {
        refAudio.current?.pause();
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    if (nameTrack === currentTrack && !isPlay) {
      refAudio.current?.play().then(() => {
        setIsPlay(true);
      }).catch(() => {
        setIsPlay(false);
      });
      return;
    }

    refAudio.current?.load();
    refAudio.current?.setAttribute('src', src);
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

  const context = useMemo(() => ({
    isPlay,
    handlerInitFirstTrack,
    handlerPlayCurrentTrack,
    handlerPlayTrack,
    refAudio,
  }
  ), [handlerInitFirstTrack, handlerPlayCurrentTrack, handlerPlayTrack, isPlay]);

  return (
    <AudioContext.Provider value={ context }>
      <audio ref={ refAudio } src="" />
      { children }
    </AudioContext.Provider>
  );
};
