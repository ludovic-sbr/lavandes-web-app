import React from 'react';

import {Container} from '@mui/material';

import {RegisterForm} from '@/features/user';

const RegisterPage: React.FC = () => {
  return (
    <Container sx={{maxWidth: "750px !important", marginBottom: 15, marginTop: 15}}>
      <RegisterForm/>
    </Container>
  );
};

export default RegisterPage;
