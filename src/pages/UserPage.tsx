import React from 'react';
import {Container, Typography} from "@mui/material";
import {User} from "@/features/user";

const UserPage: React.FC = () => {
  return (
    <Container sx={{maxWidth: "750px !important", marginBottom: 15, marginTop: 15}}>
      <Typography variant="h4"> Mon compte </Typography>
      <User/>
    </Container>
  );
};

export default UserPage;