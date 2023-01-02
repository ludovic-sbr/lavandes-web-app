import React, {useEffect} from 'react';
import {useLoginMutation} from "@/features/authentication/api";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {authenticationActions} from "@/features/authentication/authSlice";
import {Avatar, Box, Grid, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleLogin from "react-google-login";
import {gapi} from "gapi-script";
import config from "@/config"
import {LoginFormData, LoginRequest} from "@/features/authentication/models/authentication";
import {NavLink} from "react-router-dom";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import ErrorSnackbar from "@/common/components/appSnackbars/ErrorSnackbar";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, reset} = useForm<LoginFormData>();
  const [loginPost, {isError, error, isSuccess, data}] = useLoginMutation();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: config.GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  useEffect(() => {
    if (!isSuccess || !data) return;
    dispatch(authenticationActions.login(data));
  }, [isSuccess, data]);

  const login = (d: LoginFormData) => {
    const {email, password, google_id} = d;

    const data: LoginRequest = {
      data: {
        email,
        password,
        google_id,
      }
    }

    loginPost(data);
  }

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(login)}
        noValidate
      >
        <Grid
          container
          maxWidth="xs"
          spacing={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
              <LockOutlinedIcon/>
            </Avatar>
          </Grid>
          <Grid item>
            <Typography variant="h2">
              Se connecter
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="p" variant="inherit">
              Pas de compte ? <NavLink to="/register"><u>Je m'inscris</u></NavLink> !
            </Typography>
          </Grid>
          <Grid item>
            <GoogleLogin
              clientId={config.GOOGLE_CLIENT_ID}
              buttonText="Sign in with Google"
              onSuccess={(res) => {
                // @ts-ignore
                reset({google_id: res.googleId})
                handleSubmit(login)()
              }}
              cookiePolicy={"single_host_origin"}
              theme="dark"
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse email"
              autoComplete="email"
              autoFocus
              {...register('email')}
            />
          </Grid>
          <Grid item sx={{width: '100%'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password')}
            />
          </Grid>
          <Grid item>
            <SuccessButton submit value={'Connexion'}/>
          </Grid>
        </Grid>
      </Box>

      {/* @ts-ignore */}
      <ErrorSnackbar open={isError} message={error?.data.message} />
    </>
  );
};

export default LoginForm;
