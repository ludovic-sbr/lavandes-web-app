import React from 'react';
import {useGetLocationsQuery} from "@/features/location/api";
import {Box, Stack, Typography} from "@mui/material";
import ListLocationCard from "@/features/location/components/molecules/ListLocationCard";

const ListLocation = (): JSX.Element => {
  const {data: locations, isLoading: isLoadingLocations} = useGetLocationsQuery();

  if (isLoadingLocations) return <div> Chargement des locations... </div>;
  if (!locations) return <div> Aucune location trouvée. </div>;

  return (
    <Box width={"100%"}>
      <Typography variant="caption">{locations.length} résultats</Typography>
      <Stack spacing={2}>
        {
          locations.map((location) => <ListLocationCard key={location.id} location={location}/>)
        }
      </Stack>
    </Box>
  );
};

export default ListLocation;