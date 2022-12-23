import React from 'react';

import {Container} from '@mui/material';

import LoginForm from '@/features/authentication/components/organism/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <LoginForm/>
    </Container>
  );
};

export default LoginPage;
