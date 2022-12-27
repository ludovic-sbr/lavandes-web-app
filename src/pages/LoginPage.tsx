import React from 'react';

import {Container} from '@mui/material';

import {LoginForm} from '@/features/authentication';

const LoginPage: React.FC = () => {
  return (
    <Container sx={{maxWidth: "750px !important", marginBottom: 15, marginTop: 15}}>
      <LoginForm/>
    </Container>
  );
};

export default LoginPage;
