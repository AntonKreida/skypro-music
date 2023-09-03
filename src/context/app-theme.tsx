import {
  createContext, useState, ReactNode, FC, useEffect, useMemo, useCallback
} from 'react';
import { ThemeProvider } from 'styled-components';

import { dark, light } from '@style/';


interface IThemeContext {
  currentTheme: typeof dark | typeof light;
  handlerSwitchTheme: (theme: 'dark' | 'light') => void;
}

interface IAppContext {
  children: ReactNode;
}


export const ThemeContext = createContext<IThemeContext>({
  currentTheme: light,
  handlerSwitchTheme: (_theme: string) => null,
});

export const AppThemeContext: FC<IAppContext> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<typeof dark | typeof light>({ ...light });

  useEffect(() => {
    if (localStorage.getItem('current-theme')) {
      const saveTheme = localStorage.getItem('current-theme') as 'dark' | 'light';
      setCurrentTheme(JSON.parse(saveTheme) === 'dark' ? { ...dark } : { ...light });

      return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme({ ...dark });
      return;
    }

    setCurrentTheme({ ...light });
  }, []);

  const handlerSwitchTheme = useCallback((theme: 'dark' | 'light') => {
    setCurrentTheme(theme === 'dark' ? { ...dark } : { ...light });
    localStorage.setItem('current-theme', JSON.stringify(theme));
  }, []);

  const context = useMemo(() => ({
    currentTheme,
    handlerSwitchTheme,
  }), [currentTheme, handlerSwitchTheme]);

  return (
    <ThemeContext.Provider value={ context }>
      <ThemeProvider theme={ currentTheme }>
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
