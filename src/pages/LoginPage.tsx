import React from 'react';

import {LoginForm} from '@/features/authentication';
import PageTemplate from "@/pages/templates/PageTemplate";

const LoginPage: React.FC = () => {
  return (
    <PageTemplate>
      <LoginForm/>
    </PageTemplate>
  );
};

export default LoginPage;
