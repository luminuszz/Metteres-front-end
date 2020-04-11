/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';

import InputT from '../../components/input';
import { useStyles } from './styles';

interface FormDataDto{
  fristName: string
  password:string
}

const Login:React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormDataDto> = (data) => {
    console.log(data);
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
          <InputT
            label="Frist Name"
            name="fristName"
            required
            type="text"
            id="fristName"
            autoComplete="current-fristName"
            autoFocus
          />
          <InputT
            name="password"
            required
            id="password"
            label="Password"
            autoComplete="current-password"
            autoFocus
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Box mt={8} />
    </Container>
  );
};


export default Login;
