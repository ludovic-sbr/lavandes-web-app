import React from 'react';

import {Container} from '@mui/material';
import {CreateReservationForm} from "@/features/reservation";

const CreateReservationPage: React.FC = () => {
  return (
    <Container sx={{
      maxWidth: "750px !important",
      marginBottom: 15,
      marginTop: 15,
      padding: '0 !important'
    }}>
      <CreateReservationForm/>
    </Container>
  );
};

export default CreateReservationPage;
