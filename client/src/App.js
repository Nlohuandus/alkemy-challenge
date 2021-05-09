import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/cssbaseline";
import "fontsource-roboto";
import Login from "./Components/Login";
import Home from "./Components/Home"

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        body: {
          backgroundColor: "#2F3E46",
        },
      },
    },
  },
});

function App() {
  if (!localStorage.token) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
