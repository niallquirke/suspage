import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#9FC088",
    },
    secondary: {
      main: "#E8C07D",
    },
    error: {
      main: "#CC704B",
    },
    background: {
      default: "#f7f8f9",
    },
  },
});

export default theme;
