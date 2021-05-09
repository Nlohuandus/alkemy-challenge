import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
  return (
    <Container maxWidth="xs" className={classes.container}>
      Register
      <Grid spacing={2}>
        <form action="http://localhost:8000/register" method="POST">
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
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};
export default Register;
