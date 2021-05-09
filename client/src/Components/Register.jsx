import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NavBar from "./NavBar"
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

const Register = () => {
  const classes = useStyles();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/register", {
      method: "post",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(response => {if(response.id){
        window.location.assign("http://localhost:3000/login")
      }else if (response.existence){
        alert("User already exist")
      }})
      .catch((error) => console.error("error", error));
  };
  return (
    <div>
      <NavBar/>
    <Container maxWidth="xs" className={classes.container}>
      Register
      <Grid>
        <form onSubmit={submitHandler}>
          <Grid container item xs={12}>
            <TextField
              fullWidth
              type="text"
              minLength="4"
              maxLength="8"
              name="username"
              id="username"
              variant="filled"
              required
              label="Username"
              onChange={changeHandler}
              className={classes.inputs}
            />
          </Grid>
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
              Register
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
    </div>
  );
};
export default Register;
