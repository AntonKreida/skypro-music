import { createGlobalStyle } from 'styled-components';

import StratosSkyengWoff from '@assets/font/StratosSkyeng.woff';
import StratosSkyengWoffTwo from '@assets/font/StratosSkyeng.woff2';


export const FontsStyle = createGlobalStyle`
     @font-face {
        font-family: "StratosSkyeng";
        src: url(${StratosSkyengWoff}) format('woff'), url(${StratosSkyengWoffTwo}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;
