import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/00.Home";
import {
  createTheme,
  //responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useState } from "react";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/'

function App() {
  const [mode, setMode] = useState("dark");

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "dark" && {
        primary: {
          main: "#bdbdbd",
          background: "#eeeeee",
        },
        secondary: {
          main: "#bdbdbd",
        },
        third: {
          main: "#00c853",
        },

      }),
      ...(mode === "light" && {
        primary: {
          main: "#000",
        },
        secondary: {
          main: "#bdbdbd",
        },
        third: {
          main: "#00c853",
        },
      }),
    },
    typography: {
      // responsiveFontSizes(darkModeTheme)
      fontFamily: ["arial"],
      fontWeight: ["bold"],
    },
  });

  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkModeTheme}>

        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
