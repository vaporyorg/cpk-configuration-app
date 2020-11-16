import { createGlobalStyle } from 'styled-components'
import avertaFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-normal.woff2'
import avertaBoldFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-bold.woff2'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    padding: 10px;
  }

  @font-face {
    font-family: 'Averta';
    font-display: swap;
    src: local('Averta'), local('Averta Bold'),
    url(${avertaFont}) format('woff2'),
    url(${avertaBoldFont}) format('woff');
  }

  .web3connect-connect-button {
    outline: none;
    background: #008c73;
    border: 1px solid #008c73;
    color: #fff;
    cursor: pointer;
    transform: none;
  }
`

export default GlobalStyle