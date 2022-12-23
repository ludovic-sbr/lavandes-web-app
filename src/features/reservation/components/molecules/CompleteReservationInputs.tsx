import React from 'react';
import {TextField} from "@mui/material";
import {UseFormRegister} from "react-hook-form";
import {ReservationRequest} from "@/features/reservation/models/reservation";

type Props = {
  register: UseFormRegister<ReservationRequest>;
  step: number;
}

const CompleteReservationInputs = ({register, step}: Props): JSX.Element => {
  return (
    <>
      <TextField
        type="number"
        margin="normal"
        required
        fullWidth
        id="adult_nbr"
        label="Nombre d'adultes"
        autoComplete="lastname"
        autoFocus
        {...register('adult_nbr')}
        disabled={step === 3}
        InputProps={{inputProps: {min: 1, max: 4}}}
        defaultValue={1}
      />
      <TextField
        type="number"
        margin="normal"
        required
        fullWidth
        id="child_nbr"
        label="Nombre d'enfants "
        autoComplete="lastname"
        autoFocus
        {...register('child_nbr')}
        disabled={step === 3}
        InputProps={{inputProps: {min: 0, max: 4}}}
        defaultValue={0}
      />
      <TextField
        type="number"
        margin="normal"
        required
        fullWidth
        id="animal_nbr"
        label="Nombre d'animaux"
        autoComplete="Nombre d'animaux"
        autoFocus
        {...register('animal_nbr')}
        disabled={step === 3}
        InputProps={{inputProps: {min: 0, max: 4}}}
        defaultValue={0}
      />
      <TextField
        type="number"
        margin="normal"
        required
        fullWidth
        id="vehicle_nbr"
        label="Nombre de véhicules"
        autoComplete="lastname"
        autoFocus
        {...register('vehicle_nbr')}
        disabled={step === 3}
        InputProps={{inputProps: {min: 0, max: 4}}}
        defaultValue={0}
      />
    </>
  );
};

export default CompleteReservationInputs;