import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';

import {authenticationActions} from '@/features/authentication/authSlice';
import PageTemplate from "@/common/pages/templates/PageTemplate";

const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticationActions.logout());
  }, []);

  return (
    <PageTemplate title="Vous avez été déconnecté de l'application." />
  );
};

export default LogoutPage;
