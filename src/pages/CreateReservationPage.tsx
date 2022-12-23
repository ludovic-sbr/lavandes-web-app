import React from 'react';

import {Container} from '@mui/material';
import CreateReservationForm from "@/features/reservation/components/organisms/CreateReservationForm";

const CreateReservationPage: React.FC = () => {
  return (
    <Container>
      <CreateReservationForm/>
    </Container>
  );
};

export default CreateReservationPage;
