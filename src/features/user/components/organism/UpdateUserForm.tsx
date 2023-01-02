import React, {useEffect, useState} from 'react';
import {Alert, Box, ButtonGroup, Grid, TextField} from "@mui/material";
import {useGetMeQuery, usePatchUserMutation} from "@/features/user/api";
import {useForm} from "react-hook-form";
import {UserRequest} from "@/features/user/models/user";
import {useNavigate} from "react-router";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import CancelButton from "@/common/components/buttons/CancelButton";
import UpdateUserModal from "@/features/user/components/molecules/UpdateUserModal";
import ErrorSnackbar from "@/common/components/appSnackbars/ErrorSnackbar";

const UpdateUserForm = (): JSX.Element => {
  const {data: currentUser, isLoading: isLoadingCurrentUser} = useGetMeQuery();
  const [updateUser, {isError, error, isSuccess: userIsPatched}] = usePatchUserMutation();
  const [showed, setShowed] = useState<boolean>(false);
  const {register, handleSubmit} = useForm<UserRequest>();
  const navigate = useNavigate();

  const onUpdate = (d: UserRequest) => {
    const {
      firstname,
      lastname,
      email,
      password,
      repeat_password
    } = d;

    const data: UserRequest = {
      firstname,
      lastname,
      email,
      password: password !== "" ? password : undefined,
      repeat_password: repeat_password !== "" ? repeat_password : undefined
    }

    updateUser({id: currentUser?.id, ...data});
    setShowed(false);
  }

  useEffect(() => {
    if (userIsPatched) navigate("/logout");
  }, [userIsPatched])

  if (isLoadingCurrentUser) return <div> Chargement ... </div>;
  if (!currentUser) return <div> Erreur ! ... </div>;

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onUpdate)}
        noValidate
      >
        <Grid
          container
          maxWidth="xs"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pt: 2,
            pb: 2
          }}
          spacing={1}
        >
          {
            currentUser.google_id && (
              <Grid item>
                <Alert severity="warning"> Vous êtes connecté avec Google donc vous ne pouvez pas modifier votre
                  email ou votre mot de passe. </Alert>
              </Grid>
            )
          }
          <Grid item>
            <Alert severity="info">Après modification, vous devrez vous reconnecter.</Alert>
          </Grid>
          <Grid item>
            <TextField
              type="text"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="Prénom"
              autoComplete="firstname"
              autoFocus
              defaultValue={currentUser.firstname}
              {...register('firstname')}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Nom"
              autoComplete="lastname"
              autoFocus
              defaultValue={currentUser.lastname}
              {...register('lastname')}
            />
          </Grid>
          {
            !currentUser.google_id && (
              <>
                <Grid item>
                  <TextField
                    type="text"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Adresse mail"
                    autoComplete="email"
                    autoFocus
                    {...register('email')}
                    defaultValue={currentUser.email}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Mot de passe"
                    autoComplete="password"
                    autoFocus
                    {...register('password')}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    margin="normal"
                    required
                    fullWidth
                    id="repeat_password"
                    label="Répéter mot de passe"
                    autoComplete="password"
                    autoFocus
                    {...register('repeat_password')}
                  />
                </Grid>
              </>
            )
          }
        </Grid>
        <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'end'}}>
          <ButtonGroup
            disableElevation
            aria-label="Disabled elevation buttons"
          >
            <CancelButton onClick={() => navigate("/user")} value={'Annuler'}/>
            <SuccessButton onClick={() => setShowed(true)} value={'Enregistrer'}/>
          </ButtonGroup>
        </Grid>
      </Box>
      <UpdateUserModal onUpdate={handleSubmit(onUpdate)} showed={showed} setShowed={setShowed}/>

      {/* @ts-ignore */}
      <ErrorSnackbar open={isError} message={error?.data.message} />
    </>

  );
};

export default UpdateUserForm;
