import React from 'react';

export const themes = {
    light: {
        primary: "#0FCDB2",
        backgroundColor: "#ffffff"
      },
    dark: {
        primary: "#bb86fc",
        backgroundColor: "#121212"
      }
  };

export const ThemeContext = React.createContext(themes.light);