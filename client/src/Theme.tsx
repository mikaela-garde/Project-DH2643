import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      primary: "#1F1E61",
      orange: "#E38800;",
      white: "#F2F2F2"
    },
    
    fonts: {
      raleway: "Raleway"
    },
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    },
    heading1: {
      
    }
  }

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;