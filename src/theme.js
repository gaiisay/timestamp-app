import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#77dd77",
    },
    secondary: {
      main: "#ff6961",
    },
    warning: {
      main: "#ffb347",
    },
  },
});

export default theme;
