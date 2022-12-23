import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useCompleteReservationMutation, useGetReservationBySessionIdQuery} from "@/features/reservation/api";
import {CompleteReservationRequest, ReservationStatusEnum} from "@/features/reservation/models/reservation";
import {Box, Container, Grid} from "@mui/material";

const CompleteReservationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const stripeSessionId = searchParams.get("session_id");
  const {data: reservation, isLoading: isLoadingReservation} = useGetReservationBySessionIdQuery(stripeSessionId!, {
    skip: !stripeSessionId,
  });
  const [completeReservation, {data: result, isSuccess}] = useCompleteReservationMutation();

  useEffect(() => {
    if (!reservation || reservation.status !== ReservationStatusEnum.OPEN) return;

    const data: CompleteReservationRequest = {
      status: paymentStatus === "complete" ?
        ReservationStatusEnum.COMPLETE
        : ReservationStatusEnum.CANCELED
    };

    completeReservation({
      reservationId: reservation.id,
      data: data
    });
  }, [reservation, paymentStatus])

  if (isLoadingReservation) return <h1> Chargement ! </h1>;
  if (!paymentStatus || !stripeSessionId || !reservation) return <h1> Erreur ! </h1>;

  return (
    <Container sx={{marginBottom: 15, marginTop: 15}}>
      <Box>
        <Grid
          container
          maxWidth="xs"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 5,
            pb: 5
          }}
        >
          {
            isSuccess && result?.status == ReservationStatusEnum.COMPLETE &&
            <Grid item>
              <h1> Tout est ok </h1>
              <p> Votre réservation a bien été confirmée. </p>
            </Grid>
          }
          {
            ((isSuccess && result?.status == ReservationStatusEnum.CANCELED) || !isSuccess) &&
            <Grid item>
              <h1> Oups !.. </h1>
              <p> Une erreur est survenue lors du paiement de votre réservation ou cette réservation n'est plus
                valide. </p>
            </Grid>
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default CompleteReservationPage;