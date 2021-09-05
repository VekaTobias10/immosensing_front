import React from 'react';

export const themes = {
  palette:{
    light: {
        primary: "#0FCDB2",
        secondary: "#ffffff",
        error: "#d32f2f",
        warning:"#f57c00",
        info:"#1976d2",
        success:"#388e3c",
      },
    dark: {
        primary: "#bb86fc",
        backgroundColor: "#121212",
        error: "#e57373",
        warning:"#ffb74d",
        info:"#64b5f6",
        success:"#81c784",
      }
    }
  };

export const ThemeContext = React.createContext(themes.palette.light);