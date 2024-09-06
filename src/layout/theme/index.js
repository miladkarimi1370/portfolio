import { createTheme } from "@mui/material"


export const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: " Tanha, Vazir , Roboto BK"
  },
  palette: {
    mode: "light",
    common: {
      black: "#282A36",
      white: "#F8F8F2"
    },
    primary: {
      main: "#8BE9FD"
    },
    secondary: {
      main: "#BD93F9"
    }
  },

})

export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: " Tanha, Vazir , Roboto BK"
  },
  palette: {
    mode: "dark",
    common: {
      black: "#282A36",
      white: "#F8F8F2"
    },
    primary: {
      main: "#8BE9FD"
    },
    secondary: {
      main: "#BD93F9"
    }
  },

})