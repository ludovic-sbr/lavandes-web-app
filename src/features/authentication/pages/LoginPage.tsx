import React from 'react';

import {LoginForm} from '@/features/authentication';
import PageTemplate from "@/common/pages/templates/PageTemplate";

const LoginPage: React.FC = () => {
  return (
    <PageTemplate>
      <LoginForm/>
    </PageTemplate>
  );
};

export default LoginPage;
