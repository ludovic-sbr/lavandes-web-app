import React, {useEffect, useState} from 'react';
import {useConfirmReservationMutation, useGetReservationQuery,} from "@/features/reservation/api";
import {Box, Button, ButtonGroup, Grid, TextField} from "@mui/material";
import AppStepper from "@/common/components/appStepper";
import LocationCard from "@/features/reservation/components/molecules/LocationCard";
import PeriodReservationInputs from "@/features/reservation/components/molecules/PeriodReservationInputs";
import {useForm} from "react-hook-form";
import {ReservationRequest, ReservationStatusEnum} from "@/features/reservation/models/reservation";
import {DateTime} from "luxon";
import {useNavigate} from "react-router";

type Props = {
  reservationId: string;
};

const ConfirmReservationForm = ({reservationId}: Props): JSX.Element => {
  const {data: reservation, isLoading: isLoadingReservation} = useGetReservationQuery(parseInt(reservationId, 10));
  const [confirmReservation, {
    data: confirmReservationResult,
    isSuccess: isReservationConfirmed
  }] = useConfirmReservationMutation();
  const {register, handleSubmit, reset, setValue} = useForm<ReservationRequest>();
  const [invalidDate] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!reservation) return;

    reset({
      adult_nbr: reservation.adult_nbr,
      child_nbr: reservation.child_nbr,
      animal_nbr: reservation.animal_nbr,
      vehicle_nbr: reservation.vehicle_nbr,
      from: DateTime.fromISO(reservation.from).toFormat("yyyy-MM-dd"),
      to: DateTime.fromISO(reservation.to).toFormat("yyyy-MM-dd"),
    })
  }, [reservation])

  const onSubmit = (d: ReservationRequest) => {
    if (!reservation || !d.user_contact) return;

    const {
      user_contact,
      user_comment,
    } = d;

    const reservationData: ReservationRequest = {
      user_contact,
      user_comment,
    }

    confirmReservation({reservationId: reservation.id!, data: reservationData});
  }

  useEffect(() => {
    if (confirmReservationResult && isReservationConfirmed) window.location.href = confirmReservationResult.stripe_session_url;
  }, [confirmReservationResult, isReservationConfirmed]);

  if (isLoadingReservation) return <h1> Chargement ...</h1>
  if (!reservation || reservation.status == ReservationStatusEnum.COMPLETE) return <h1> Erreur !</h1>;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{mt: 15, mb: 15}}>
      <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'center'}}>
        <Grid item>
          <AppStepper currentStep={3}/>
        </Grid>
      </Grid>
      <Grid
        container
        maxWidth="xs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 5,
          pb: 5
        }}
      >
        <Grid item>
          <h3> VACANCIER </h3>
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="client_name"
            label="Nom et prénom"
            autoComplete="client_name"
            autoFocus
            disabled
            defaultValue={`${reservation.user.firstname} ${reservation.user.lastname}`}
          />
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="client_email"
            label="Email"
            autoComplete="client_email"
            autoFocus
            disabled
            defaultValue={`${reservation.user.email}`}
          />
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="tel"
            label="Téléphone"
            autoComplete="tel"
            autoFocus
            {...register('user_contact')}
          />
        </Grid>
        <Grid item>
          <h3> RESERVATION </h3>
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="reservation_number"
            label="Numéro de réservation"
            autoComplete="reservation_number"
            autoFocus
            disabled
            defaultValue={reservation.reservation_key}
          />
          <LocationCard
            key={reservation.location.id}
            location={reservation.location}
            setValue={setValue}
            selected={true}
          />
          <PeriodReservationInputs step={3} register={register} invalidDate={invalidDate}/>
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="night_number"
            label="Nombre total de nuits"
            autoComplete="night_number"
            autoFocus
            disabled
            defaultValue={reservation.night_number}
          />
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="client_number"
            label="Nombre de personnes"
            autoComplete="client_number"
            autoFocus
            disabled
            defaultValue={reservation.adult_nbr + reservation.child_nbr}
          />
          <TextField
            type="number"
            margin="normal"
            fullWidth
            id="vehicle_number"
            label="Nombre de véhicules"
            autoComplete="vehicle_number"
            autoFocus
            disabled
            defaultValue={reservation.vehicle_nbr}
          />
        </Grid>
        <Grid item>
          <h3> COMPLEMENTS </h3>
          <TextField
            type="text"
            margin="normal"
            fullWidth
            id="client_comment"
            label="Commentaire"
            autoComplete="client_comment"
            placeholder="Informations supplémentaires sur la réservation ..."
            autoFocus
            multiline
            {...register("user_comment")}
          />
        </Grid>
      </Grid>
      <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'end'}}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button variant="outlined" onClick={() => navigate("/reservation/new")}>Annuler</Button>
          <Button variant="contained" type="submit">Payer {reservation.total_price}€</Button>
        </ButtonGroup>
      </Grid>
    </Box>
  );
};

export default ConfirmReservationForm;