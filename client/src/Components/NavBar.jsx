import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"#cad2c5"
  },
  title: {
    flexGrow: 1,
    color:"#cad2c5"
  },
  container:{
      backgroundColor:"#84a98c"
  },
  loginout:{
      color:"#cad2c5"
  }
}));
const logout = (e) => {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
};
const NavBar = () => {
  const classes = useStyles();
  const logged = localStorage.userId ? true : false;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.container}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome
          </Typography>
          {logged ? (
            <Button color="inherit" onClick={logout} className={classes.loginout}>
              logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() =>
                window.location.assign("http://localhost:3000/login")
              }
              className={classes.loginout}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
