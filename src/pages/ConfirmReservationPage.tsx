import React from 'react';
import {useParams} from "react-router";
import {Container} from "@mui/material";
import {ConfirmReservationForm} from "@/features/reservation";

const ConfirmReservationPage: React.FC = () => {
  const {reservationId} = useParams();

  if (!reservationId) return <h1> Erreur </h1>;

  return (
    <Container sx={{maxWidth: '750px !important', marginBottom: 15, marginTop: 15}}>
      <ConfirmReservationForm reservationId={reservationId}/>
    </Container>
  );
};

export default ConfirmReservationPage;