import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/cssbaseline'
import 'fontsource-roboto';
import Login from "./Components/Login";
import Redir from "./Components/Redir";


const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        body:{
          backgroundColor:"#2F3E46"
        },
      },
    },
  },
});

function App() {
  if(!localStorage.toke){
    return (
        <ThemeProvider theme={theme}>
    <CssBaseline />
    <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/redir" component={Redir}/>
    </Switch>
    </ThemeProvider>
        )
      }else{
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/redir" component={Redir}/>
        </Switch>
        </ThemeProvider>
      }
}

export default App;
