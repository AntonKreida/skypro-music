import 'styled-components';


interface TTheme {
  name: 'dark' | 'light';
  colors: {
    godGray: string;
    mineShaft: string;
    mineShaftBlack: string;
    gray: string;
    doveGray: string;
    tundora: string;
    silverChalice: string;
    default: string;
    mauve: string;
    heliotrope: string;
    heliotropeWhite: string;
  };
}


declare module 'styled-components' {
    type themeT = TTheme;
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends themeT {}
}
