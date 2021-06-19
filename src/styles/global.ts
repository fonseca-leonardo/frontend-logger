import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    body {

        color: ${({ theme }) => theme.fontColor};

        font-family: Nunito;

        font-size: 14px;

        margin: 0;

        background: ${({ theme }) => theme.background};

        overflow: overlay;

    }

    



    body > #root {

        height: 100%;

    }



    body > #root > div {

        display: flex;

        height: 100%;

    }



    body * {

        box-sizing: border-box;

        z-index: 1;

    }



    .theme-animation {

        position: fixed;

        top: 0;

        bottom: 0;

        right: 0;

        left: 0;

        transition: 0.7s ease clip-path;

        clip-path: circle(0%);

    }



    ::-webkit-scrollbar {

        width: 6px;

        height: 6px;

    }

    ::-webkit-scrollbar-thumb {

        background: ${({ theme }) => theme.thumbColor};

        border-radius: 7px;

    }



    ::-webkit-scrollbar-track{

        background: transparent;

        

    }

`;
