import React, {useEffect} from 'react';

import {Container, Typography} from '@mui/material';
import {useDispatch} from 'react-redux';

import {authenticationActions} from '@/features/authentication/authSlice';

const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationActions.logout());
  }, []);

  return (
    <Container sx={{
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      color: 'inherit',
      textDecoration: 'none',
      height: '650px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Typography
        variant="h5"
      >
        Vous avez été déconnecté de l'application.
      </Typography>
    </Container>
  );
};

export default LogoutPage;
