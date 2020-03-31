import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "Nunito Sans", sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap");
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    width: 100%;
  }`;
