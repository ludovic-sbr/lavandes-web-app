import React from 'react';
import {UpdateUserForm} from '@/features/user';
import PageTemplate from "@/common/pages/templates/PageTemplate";

const UpdateUserPage: React.FC = () => {
  return (
    <PageTemplate title="Modifier mes informations">
      <UpdateUserForm/>
    </PageTemplate>
  );
};

export default UpdateUserPage;