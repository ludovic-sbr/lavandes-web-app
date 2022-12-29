import React from 'react';
import {useParams} from "react-router";
import {ConfirmReservationForm} from "@/features/reservation";
import PageTemplate from "@/pages/templates/PageTemplate";

const ConfirmReservationPage: React.FC = () => {
  const {reservationId} = useParams();

  if (!reservationId) return <h1> Erreur </h1>;

  return (
    <PageTemplate>
      <ConfirmReservationForm reservationId={reservationId}/>
    </PageTemplate>
  );
};

export default ConfirmReservationPage;