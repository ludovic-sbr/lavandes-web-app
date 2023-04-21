import React from 'react';

import {CreateReservationForm} from "@/features/reservation";
import PageTemplate from "@/common/pages/templates/PageTemplate";

const CreateReservationPage: React.FC = () => {
  return (
    <PageTemplate>
      <CreateReservationForm/>
    </PageTemplate>
  );
};

export default CreateReservationPage;
