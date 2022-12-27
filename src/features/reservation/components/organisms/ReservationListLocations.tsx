import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {LocationModel} from "@/features/location/models/location";
import ReservationLocationCard from "@/features/reservation/components/molecules/ReservationLocationCard";
import {UseFormSetValue, UseFormWatch} from "react-hook-form";
import {ReservationRequest} from "@/features/reservation/models/reservation";

type Props = {
  locations: LocationModel[];
  setValue: UseFormSetValue<ReservationRequest>;
  watch: UseFormWatch<ReservationRequest>;
}

const ReservationListLocations = ({locations, setValue, watch}: Props): JSX.Element => {
  if (!locations) return <div> Aucune location trouvée. </div>;

  const location_id = watch("location_id");

  return (
    <Box width={"100%"}>
      <Typography variant="caption">{locations.length} résultats</Typography>
      <Stack spacing={2}>
        {
          locations.map((location) =>
            <ReservationLocationCard
              key={location.id}
              location={location}
              setValue={setValue}
              selected={location_id === location.id}
            />
          )
        }
      </Stack>
    </Box>
  );
};

export default ReservationListLocations;