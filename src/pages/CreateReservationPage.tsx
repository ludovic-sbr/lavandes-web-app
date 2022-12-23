import React from 'react';

import {Container} from '@mui/material';
import CreateReservationForm from "@/features/reservation/components/organisms/CreateReservationForm";

const CreateReservationPage: React.FC = () => {
  return (
    <Container sx={{marginBottom: 15, marginTop: 15}}>
      <CreateReservationForm/>
    </Container>
  );
};

export default CreateReservationPage;
