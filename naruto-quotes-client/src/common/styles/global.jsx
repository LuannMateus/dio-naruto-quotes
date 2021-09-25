import { createGlobalStyle } from 'styled-components';
import BgImage from '../../assets/images/bg.jpeg';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${BgImage}) center no-repeat;
    background-size: cover;
    color: #332c36;

    font-family: 'New Tegomin', serif;
  }
`;

export { GlobalStyle };
