import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    html {
        font-family: "StratosSkyeng";
        background: #181818;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    * {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        display: block;
        text-decoration: none;
        cursor: pointer;
    }

    img {
        display: block;
        height: auto;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    #root {
        width: 100%;
        height: 100%;
        overflow: hidden;
    } 
`;
