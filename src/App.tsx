import { StylesProvider, ThemeProvider } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./Routes";
import { theme } from "./theme";

/**
 * App 
 * Top level component
 */
const App = () => (
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <Header />
      <Routes />
      <Footer />
    </StylesProvider>
  </ThemeProvider>
);

export default App;
