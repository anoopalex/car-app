import { createMuiTheme } from "@material-ui/core";

// Override primary color based on application theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4a4a4a",
    },
  },
});
