import React, {useEffect, useState} from 'react';
import {useDeleteUserMutation, useGetMeQuery} from "@/features/user/api";
import {Alert, Box, Button, ButtonGroup, Grid, TextField} from "@mui/material";
import {useNavigate} from "react-router";
import DeleteUserModal from "@/features/user/components/molecules/DeleteUserModal";

const User: React.FC = () => {
  const {data: currentUser, isLoading: isLoadingCurrentUser} = useGetMeQuery();
  const [deleteUser, {isSuccess: userDeleted}] = useDeleteUserMutation();
  const [showed, setShowed] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userDeleted) navigate('/logout');
  }, [userDeleted])

  if (isLoadingCurrentUser) return <div> Chargement ... </div>;
  if (!currentUser) return <div> Erreur ! ... </div>;

  // @ts-ignore
  const onDelete = () => deleteUser(parseInt(currentUser.id, 10));

  return (
    <>
      <Box>
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
                <Alert severity="info"> Vous êtes connecté avec Google. </Alert>
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
              value={currentUser.firstname}
              disabled
              InputProps={{inputProps: {min: 1, max: 4}}}
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
              value={currentUser.lastname}
              disabled
              InputProps={{inputProps: {min: 1, max: 4}}}
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
              disabled
              InputProps={{inputProps: {min: 1, max: 4}}}
            />
          </Grid>
        </Grid>
        <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'end'}}>
          <ButtonGroup
            disableElevation
            aria-label="Disabled elevation buttons"
          >
            <Button variant="outlined" color="error" onClick={() => setShowed(true)}>Supprimer mon compte</Button>
            <Button variant="contained" onClick={() => navigate('/user/update')}>Modifier mes informations</Button>
          </ButtonGroup>
        </Grid>
      </Box>
      <DeleteUserModal onDelete={onDelete} showed={showed} setShowed={setShowed} />
    </>
  );
};

export default User;