import React, {useEffect, useState} from 'react';
import {useDeleteUserMutation, useGetMeQuery} from "@/features/user/api";
import {Alert, Box, ButtonGroup, Grid, TextField} from "@mui/material";
import {useNavigate} from "react-router";
import DeleteUserModal from "@/features/user/components/molecules/DeleteUserModal";
import SuccessButton from "@/common/components/buttons/SuccessButton";
import DangerButton from "@/common/components/buttons/DangerButton";

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
          spacing={1}
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
            />
          </Grid>
        </Grid>
        <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'end'}}>
          <ButtonGroup
            disableElevation
            aria-label="Disabled elevation buttons"
          >
            <DangerButton onClick={() => setShowed(true)} value={'Supprimer mon compte'}/>
            <SuccessButton onClick={() => navigate('/user/update')} value={'Modifier mes informations'}/>
          </ButtonGroup>
        </Grid>
      </Box>
      <DeleteUserModal onDelete={onDelete} showed={showed} setShowed={setShowed}/>
    </>
  );
};

export default User;