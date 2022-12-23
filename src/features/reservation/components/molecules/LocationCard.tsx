import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import {LocationResponse} from "@/common/models/location";
import {UseFormSetValue} from "react-hook-form";
import {ReservationRequest} from "@/features/reservation/models/reservation";

type Props = {
  location: LocationResponse;
  setValue: UseFormSetValue<ReservationRequest>;
  selected: boolean;
};

const LocationCard = ({location, setValue, selected}: Props): JSX.Element => {
  return (
    <Card
      sx={{minWidth: 550, background: selected ? "#dedede" : "inherit"}}
      onClick={() => setValue('location_id', location.id)}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Mobil-home
        </Typography>
        <Typography variant="h5" component="div">
          {location.name}
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          {location.max_persons} personnes
        </Typography>
        <Typography variant="body2">
          {location.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;