import React from 'react';
import {useGetLocationQuery} from "@/features/location/api";
import {useNavigate} from "react-router";

type Props = {
  locationId: string;
}

const Location = ({locationId}: Props): JSX.Element => {
  const {data: location, isLoading: isLoadingLocation} = useGetLocationQuery(parseInt(locationId, 10));
  const navigate = useNavigate();

  if (isLoadingLocation) return <div> Chargement de la location... </div>;
  if (!location) navigate("/locations");

  return (
    <div>
      Détails d'une location
    </div>
  );
};

export default Location;