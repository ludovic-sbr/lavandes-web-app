import React, {useEffect, useState} from 'react';
import {useGetLocationsByPeriodQuery} from "@/common/services/api";
import {usePostReservationMutation} from "@/features/reservation/api";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {ReservationRequest} from "@/features/reservation/models/reservation";
import {Box, Button, ButtonGroup, Grid} from "@mui/material";
import AppStepper from "@/common/components/appStepper";
import CompleteReservationInputs from "@/features/reservation/components/molecules/CompleteReservationInputs";
import PeriodReservationInputs from "@/features/reservation/components/molecules/PeriodReservationInputs";
import {DateTime} from "luxon";
import {useGetMeQuery} from "@/features/user/api";
import LocationCard from "@/features/reservation/components/molecules/LocationCard";

const CreateReservationForm = (): JSX.Element => {
  const {data: currentUser, isLoading: isLoadingCurrentUser} = useGetMeQuery();
  const [postReservation, {data: postResult, isSuccess}] = usePostReservationMutation();
  const navigate = useNavigate();
  const {register, handleSubmit, reset, watch, setValue} = useForm<ReservationRequest>();
  const from = watch("from");
  const to = watch("to");
  const {data: locations, isLoading: isLoadingLocations} = useGetLocationsByPeriodQuery({from, to}, {
    skip: !from || !to
  });
  const [invalidDate, setInvalidDate] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);

  const location_id = watch("location_id");

  useEffect(() => {
    if (!from || !to) return;

    setInvalidDate(to < DateTime.fromISO(from).plus({days: 7}).toFormat("yyyy-MM-dd"));
  }, [from, to])

  useEffect(() => {
    reset({
      from: DateTime.now().toFormat("yyyy-MM-dd"),
      to: DateTime.now().plus({days: 7}).toFormat("yyyy-MM-dd"),
    })
  }, [])

  const onSubmit = (d: ReservationRequest) => {
    if (!currentUser) return;

    const {
      location_id,
      adult_nbr,
      child_nbr,
      animal_nbr,
      vehicle_nbr,
      from,
      to,
    } = d;

    const data: ReservationRequest = {
      user_id: currentUser.user.id,
      location_id,
      adult_nbr,
      child_nbr,
      animal_nbr,
      vehicle_nbr,
      from: from,
      to: to,
    };

    postReservation(data);
  }

  useEffect(() => {
    if (postResult && isSuccess) navigate(`/reservation/${String(postResult.id)}/confirm`);
  }, [isSuccess]);

  if (isLoadingLocations || isLoadingCurrentUser) return <h1> Chargement en cours ... </h1>;
  if (!locations || !currentUser) return <h1> Erreur. </h1>;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{mt: 15, mb: 15}}
    >
      <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'center'}}>
        <Grid item>
          <AppStepper currentStep={step}/>
        </Grid>
      </Grid>
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
        {step === 0 && (
          <Grid item>
            <PeriodReservationInputs step={step} register={register} invalidDate={invalidDate}/>
          </Grid>
        )}
        {step === 1 && (
          <Grid item>
            <CompleteReservationInputs register={register} step={step}/>
          </Grid>
        )}
        {step === 2 && (
          <Grid item>
            {locations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                setValue={setValue}
                selected={location_id === location.id}
              />
            ))}
          </Grid>
        )}
      </Grid>
      <Grid container maxWidth="xs" sx={{display: 'flex', justifyContent: 'end'}}>
        {step === 0 && (
          <Button
            variant="contained"
            disabled={invalidDate}
            onClick={() => setStep(step + 1)}>
            Suivant
          </Button>
        )}
        {step === 1 && (
          <ButtonGroup
            disableElevation
            aria-label="Disabled elevation buttons"
          >
            <Button variant="outlined" onClick={() => setStep(step - 1)}>Précédent</Button>
            <Button variant="contained" onClick={() => setStep(step + 1)}>Suivant</Button>
          </ButtonGroup>
        )}
        {step === 2 && (
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button variant="outlined" onClick={() => setStep(step - 1)}>Précédent</Button>
            <Button variant="contained" disabled={!location_id} type="submit">Valider</Button>
          </ButtonGroup>
        )}
      </Grid>
    </Box>
  );
};

export default CreateReservationForm;