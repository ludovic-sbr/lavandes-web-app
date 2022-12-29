import React from 'react';

import {CreateReservationForm} from "@/features/reservation";
import PageTemplate from "@/pages/templates/PageTemplate";

const CreateReservationPage: React.FC = () => {
  return (
    <PageTemplate>
      <CreateReservationForm/>
    </PageTemplate>
  );
};

export default CreateReservationPage;
