import React from 'react';
import {UseFormRegister} from "react-hook-form";
import {ReservationRequest} from "@/features/reservation/models/reservation";
import {Alert, Grid, TextField} from "@mui/material";

type Props = {
  register: UseFormRegister<ReservationRequest>;
  invalidDate: boolean;
  step: number;
}

const PeriodReservationInputs = ({step, register, invalidDate}: Props): JSX.Element => {
  return (
    <>
      {
        invalidDate && (
          <Grid item>
            <Alert severity="error">Vous ne pouvez réserver moins de 7 jours.</Alert>
          </Grid>
        )
      }
      <Grid item>
        <TextField
          type="date"
          margin="normal"
          label="Date d'arrivée"
          required
          fullWidth
          id="from"
          autoFocus
          {...register("from")}
          disabled={step === 3}
        />
      </Grid>
      <Grid item>
        <TextField
          type="date"
          margin="normal"
          label="Date de départ"
          required
          fullWidth
          id="to"
          autoFocus
          {...register("to")}
          disabled={step === 3}
        />
      </Grid>
    </>
  );
};

export default PeriodReservationInputs;