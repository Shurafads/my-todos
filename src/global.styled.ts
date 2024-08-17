import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
  }
  body {
      margin: 0;
      height: 100vh;
      background-color: rgb(250, 250, 250);
  }
`;
