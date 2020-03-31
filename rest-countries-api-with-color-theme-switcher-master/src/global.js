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
  }

  header {
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    box-shadow: 0.1rem 0.1rem 0.3rem ${({ theme }) => theme.shadow};

    button {
      color: ${({ theme }) => theme.text};
    }
  }

  main {
    padding: 0 4rem;

    input[type=search] {
      background: ${({ theme }) => theme.header};
      color: ${({ theme }) => theme.text};
      box-shadow: 0.1rem 0.1rem 0.3rem ${({ theme }) => theme.shadow};
    }
  }`;
