import React from 'react';
import {Container, Typography} from "@mui/material";
import {UpdateUserForm} from '@/features/user';

const UpdateUserPage: React.FC = () => {
  return (
    <Container sx={{maxWidth: "750px !important", marginBottom: 15, marginTop: 15}}>
      <Typography variant="h4"> Modifier mes informations </Typography>
      <UpdateUserForm/>
    </Container>
  );
};

export default UpdateUserPage;