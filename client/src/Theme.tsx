import React from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
    colors: {
      primary: "#1F1E61",
      secondary: "#EC7267",
      orange: "#E38800",
      contrast: "#FFFFFF",
      background: "#FFFFFF",
      gradient: "linear-gradient(#EC7267, #FDA78C)"
    },
    fonts: {
      raleway: "Raleway"
    },
    fontSizes: {
      xsmall: "1em",
      small: "1.5em",
      medium: "2.25em",
      large: "4em"
    }
  }

const darkTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#EC7267",
    orange: "#E38800",
    contrast: "#0F0838",
    background: "#0F0838",
    gradient: "linear-gradient(#EC7267, #FDA78C)"
  },
  fonts: {
    raleway: "Raleway"
  },
  fontSizes: {
    xsmall: "1em",
    small: "1.5em",
    medium: "2.25em",
    large: "4em"
  }
}

export {lightTheme, darkTheme}
 
/*const Theme = ({ children }) => (
  <ThemeProvider theme={boolTheme ? lightTheme : darkTheme}>{children}</ThemeProvider>
);

export default Theme;*/
