import React, {useEffect} from 'react';
import {Alert, Box, ButtonGroup, Grid, TextField} from "@mui/material";
import {useGetMeQuery, usePatchUserMutation} from "@/features/user/api";
import {useForm} from "react-hook-form";
import {UserRequest} from "@/features/user/models/user";
import {useNavigate} from "react-router";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import CancelButton from "@/common/components/buttons/CancelButton";

const UpdateUserForm = (): JSX.Element => {
  const {data: currentUser, isLoading: isLoadingCurrentUser} = useGetMeQuery();
  const [updateUser, {isSuccess: userIsPatched}] = usePatchUserMutation();
  const {register, handleSubmit} = useForm<UserRequest>();
  const navigate = useNavigate();

  const onSubmit = (d: UserRequest) => {
    const {
      firstname,
      lastname,
    } = d;

    const data: UserRequest = {
      firstname,
      lastname,
    }

    updateUser({id: currentUser?.id, ...data});
  }

  useEffect(() => {
    if (userIsPatched) navigate("/user");
  }, [userIsPatched])

  if (isLoadingCurrentUser) return <div> Chargement ... </div>;
  if (!currentUser) return <div> Erreur ! ... </div>;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
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
      >
        {
          currentUser.google_id && (
            <Grid item>
              <Alert severity="warning"> Vous êtes connecté avec Google donc vous ne pouvez pas modifier votre
                email. </Alert>
            </Grid>
          )
        }
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
            InputProps={{inputProps: {min: 1, max: 4}}}
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
            InputProps={{inputProps: {min: 1, max: 4}}}
            {...register('lastname')}
          />
        </Grid>
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
            value={currentUser.email}
            disabled={currentUser.google_id !== null}
            InputProps={{inputProps: {min: 1, max: 4}}}
          />
        </Grid>
      </Grid>
      <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'end'}}>
        <ButtonGroup
          disableElevation
          aria-label="Disabled elevation buttons"
        >
          <CancelButton onClick={() => navigate("/user")} value={'Annuler'}/>
          <SuccessButton submit value={'Enregistrer'}/>
        </ButtonGroup>
      </Grid>
    </Box>
  );
};

export default UpdateUserForm;