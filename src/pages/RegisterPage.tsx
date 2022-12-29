import React from 'react';

import {RegisterForm} from '@/features/user';
import PageTemplate from "@/pages/templates/PageTemplate";

const RegisterPage: React.FC = () => {
  return (
    <PageTemplate>
      <RegisterForm/>
    </PageTemplate>
  );
};

export default RegisterPage;
