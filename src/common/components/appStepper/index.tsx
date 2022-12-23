import React from 'react';
import {Step, StepLabel, Stepper} from "@mui/material";

type Props = {
  currentStep: number;
}

const reservationSteps = ["Sélectionner une période", "Compléter sa réservation", "Choisir une location", "Confirmer sa réservation"];

const AppStepper = ({currentStep}: Props): JSX.Element => {
  return (
    <Stepper activeStep={currentStep} alternativeLabel>
      {reservationSteps.map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default AppStepper;