import React, { useState } from "react";

import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../../theme";
import { GlobalStyles } from "../../global";

import {
  HeaderContainer,
  HeadingStyle,
  ButtonStyle,
  TextStyle
} from "./styled";

const Header = props => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <HeaderContainer>
          <HeadingStyle>Where in the world?</HeadingStyle>
          <ButtonStyle onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 512 512"
            >
              <path
                d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
                style={{ fill: theme === "light" ? "" : "#fff" }}
              />
            </svg>
            <TextStyle>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </TextStyle>
          </ButtonStyle>
        </HeaderContainer>
      </>
    </ThemeProvider>
  );
};

export default Header;
