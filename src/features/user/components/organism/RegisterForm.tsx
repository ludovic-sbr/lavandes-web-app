import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Alert, Avatar, Box, Grid, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleLogin from "react-google-login";
import {gapi} from "gapi-script";
import config from "@/config"
import {UserRequest} from "@/features/user/models/user";
import {usePostUserMutation} from "@/features/user/api";
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";
import SuccessButton from "@/common/components/buttons/SuccessButton";

const RegisterForm: React.FC = () => {
  const {register, handleSubmit, reset} = useForm<UserRequest>();
  const [userPost, {error, isSuccess: userPosted}] = usePostUserMutation();
  const navigate = useNavigate();

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
    if (userPosted) return navigate("/login")
  }, [userPosted]);

  const onSubmit = (d: UserRequest) => {
    const {
      firstname,
      lastname,
      email,
      password,
      repeat_password,
      google_id
    } = d;

    const data: UserRequest = {
      firstname,
      lastname,
      email,
      password,
      repeat_password,
      google_id,
    }

    userPost(data);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
            Créer un compte
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" variant="inherit">
            Déjà un compte ? <NavLink to="/login"><u>Je me connecte</u></NavLink> !
          </Typography>
        </Grid>
        <Grid item>
          <GoogleLogin
            clientId={config.GOOGLE_CLIENT_ID}
            buttonText="Sign up with Google"
            onSuccess={(res: any) => {
              reset({
                firstname: res.profileObj.givenName,
                lastname: res.profileObj.familyName,
                email: res.profileObj.email,
                google_id: res.googleId,
              })
              handleSubmit(onSubmit)()
            }}
            cookiePolicy={"single_host_origin"}
            theme="dark"
          />
        </Grid>
        {
          error && (
            <Grid item sx={{width: '100%', mt: 1}}>
              {/* @ts-ignore */}
              <Alert severity="error"> {error.data.message} </Alert>
            </Grid>
          )
        }
        <Grid item sx={{width: '100%'}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="Prénom"
            autoComplete="firstname"
            autoFocus
            {...register('firstname')}
          />
        </Grid>
        <Grid item sx={{width: '100%'}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Nom"
            autoComplete="lastname"
            autoFocus
            {...register('lastname')}
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
        <Grid item sx={{width: '100%'}}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Répéter mot de passe"
            type="password"
            id="repeat_password"
            autoComplete="current-password"
            {...register('repeat_password')}
          />
        </Grid>
        <Grid item>
          <SuccessButton submit value={'Inscription'}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
