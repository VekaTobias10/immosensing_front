import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";



// creamos el tema claro
const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0FCDB2",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

// creamos el tema oscuro
const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#00FCA3',
    },
    secondary: {
      main: "#000000",
    },
  },
});

export const ThemeContext = createContext({}); // creamos un contexto para poder cambiar el tema

export default function ThemeWrapper({ children }) {
  const [isDark, changeTheme] = useState(false); // gestion de estado para refrescar
  return (
    //Cambiamos el tema en función de si es dark o light
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}> 
      {/* Tenemos un contexto global para que cualquier componetne pueda cambiar el tema */}
      <ThemeContext.Provider value={{ isDark, changeTheme }}>
        {/* Renderizamos cualquier hijo de estre wrapper component */}
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}