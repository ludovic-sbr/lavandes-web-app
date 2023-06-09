import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {
  useGetReservationBySessionIdQuery,
  useCompleteReservationMutation
} from "@/features/reservation/api";
import {CompleteReservationRequest, ReservationStatusEnum} from "@/features/reservation/models/reservation";
import {Box, Grid, Typography} from "@mui/material";
import PageTemplate from "@/common/pages/templates/PageTemplate";

const CompleteReservationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const paymentStatus = searchParams.get("status");
  const stripeSessionId = searchParams.get("session_id");
  const {data: reservation, isLoading: isLoadingReservation} = useGetReservationBySessionIdQuery(stripeSessionId!, {
    skip: !stripeSessionId,
  });
  const [completeReservation, {data: result, isSuccess, isLoading: isLoadingReservationCompletion}] = useCompleteReservationMutation();

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

  if (isLoadingReservation || isLoadingReservationCompletion) return <h1> Chargement ! </h1>;
  if (!paymentStatus || !stripeSessionId || !reservation || !result) return <h1> Erreur ! </h1>;

  return (
    <PageTemplate>
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
            isSuccess && result?.reservation.status == ReservationStatusEnum.COMPLETE &&
            <Grid item>
              <Typography variant='h2'> Tout est ok </Typography>
              <Typography> Votre réservation a bien été confirmée. </Typography>
            </Grid>
          }
          {
            ((isSuccess && result?.reservation.status == ReservationStatusEnum.CANCELED) || !isSuccess) &&
            <Grid item>
              <Typography variant='h2'> Oups !.. </Typography>
              <Typography> Une erreur est survenue lors du paiement de votre réservation ou cette réservation n'est plus
                valide. </Typography>
            </Grid>
          }
        </Grid>
      </Box>
    </PageTemplate>
  );
};

export default CompleteReservationPage;
