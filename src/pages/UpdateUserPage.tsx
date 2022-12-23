import React from 'react';
import {Container, Typography} from "@mui/material";
import UpdateUserForm from '@/features/user/components/organism/UpdateUserForm';

const UpdateUserPage: React.FC = () => {
  return (
    <Container sx={{marginBottom: 15, marginTop: 15}}>
      <Typography variant="h4"> Mon compte </Typography>
      <UpdateUserForm />
    </Container>
  );
};

export default UpdateUserPage;