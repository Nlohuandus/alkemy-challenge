import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NavBar from "../Components/NavBar";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#52796F",
    padding: "2rem",
    fontSize: "2rem",
    marginTop: "7rem",
  },
  inputs: {
    background: "#CAD2C5",
    padding: "0.5rem",
    borderRadius: "1px",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        if (response.accessToken) {
          localStorage.setItem("token", `${response.accessToken}`);
          localStorage.setItem("userid", `${response.userid}`);
          window.location.assign("http://localhost:3000/");
        } else if (response.message) {
          alert("Invalid user data");
        }
      })
      .catch((error) => console.error("error", error));
  };
  return (
    <div>
      <NavBar />
      <Container maxWidth="xs" className={classes.container}>
        Login
        <Grid>
          <form onSubmit={submitHandler}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="E-mail"
                type="email"
                name="email"
                id="email"
                variant="filled"
                onChange={changeHandler}
                className={classes.inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Password"
                type="password"
                name="password"
                id="password"
                variant="filled"
                onChange={changeHandler}
                className={classes.inputs}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" value="submit" className={classes.submit}>
                Login
              </Button>
              <Button
                onClick={() =>
                  window.location.assign("http://localhost:3000/register")
                }
                className={classes.submit}
              >
                Register
              </Button>
            </Grid>
          </form>
        </Grid>
      </Container>
    </div>
  );
};
export default Login;
