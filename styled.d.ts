import 'styled-components';


interface TTheme {
  name: 'dark' | 'light';
  colors: {
    godGrayOpacity: string;
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
    mercury: string;
    bonJour: string;
    perfume: string;
    emperor: string;
    blackAndWithe: string;
  };
}


declare module 'styled-components' {
    type themeT = TTheme;
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends themeT {}
}
