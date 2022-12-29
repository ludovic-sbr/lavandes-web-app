import React from 'react';
import {NavLink} from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {Box} from "@mui/material";
import ReservationButton from "@/common/components/buttons/ReservationButton";


const LocationsButton = (): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'fixed',
        margin: 0,
        padding: 0,
        bottom: 15,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center'
      }}>
      <NavLink to="/locations">
        <ReservationButton
          variant="contained"
          startIcon={<CalendarMonthIcon/>}
        >
          HEBERGEMENTS ET RESERVATIONS
        </ReservationButton>
      </NavLink>
    </Box>
  );
};

export default LocationsButton;