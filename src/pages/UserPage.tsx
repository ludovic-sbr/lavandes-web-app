import React from 'react';
import {User} from "@/features/user";
import PageTemplate from "@/pages/templates/PageTemplate";

const UserPage: React.FC = () => {
  return (
    <PageTemplate title="Mon compte">
      <User/>
    </PageTemplate>
  );
};

export default UserPage;