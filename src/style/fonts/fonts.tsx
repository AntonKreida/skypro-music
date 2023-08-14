import { createGlobalStyle } from 'styled-components';

import StratosMediumWoff from '@assets/font/StratosLCWeb-Medium.woff';
import StratosMediumWoffTwo from '@assets/font/StratosLCWeb-Medium.woff2';
import StratosRegularWoff from '@assets/font/StratosLCWeb-Regular.woff';
import StratosRegularWoffTwo from '@assets/font/StratosLCWeb-Regular.woff2';
import StratosLightWoff from '@assets/font/StratosLCWeb-Light.woff';
import StratosLightWoffTwo from '@assets/font/StratosLCWeb-Light.woff2';
import StratosBoldWoff from '@assets/font/StratosLCWeb-Bold.woff';
import StratosBoldWoffTwo from '@assets/font/StratosLCWeb-Bold.woff2';


export const FontsStyle = createGlobalStyle`
    @font-face {
        font-family: "Stratos-Medium";
        src: url(${StratosMediumWoff}) format('woff'), url(${StratosMediumWoffTwo}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: "Stratos-Regular";
        src: url(${StratosRegularWoff}) format('woff'), url(${StratosRegularWoffTwo}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "Stratos-Light";
        src: url(${StratosLightWoff}) format('woff'), url(${StratosLightWoffTwo}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "Stratos-Bold";
        src: url(${StratosBoldWoff}) format('woff'), url(${StratosBoldWoffTwo}) format('woff2');
        font-weight: bold;
        font-style: normal;
    }
`;
