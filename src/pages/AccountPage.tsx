import React from 'react';
import {Container, Typography} from "@mui/material";
import User from "@/features/user/components/organism/User";

const AccountPage: React.FC = () => {
  return (
    <Container sx={{marginBottom: 15, marginTop: 15}}>
      <Typography variant="h4"> Mon compte </Typography>
      <User/>
    </Container>
  );
};

export default AccountPage;