import React from 'react';
import {Container, Typography} from "@mui/material";
import UserListReservation from "@/features/user/components/organism/UserListReservation";

const UserReservationPage: React.FC = () => {
  return (
    <Container sx={{maxWidth: "750px !important", marginBottom: 15, marginTop: 15}}>
      <Typography variant="h4"> Mes réservations </Typography>
      <UserListReservation/>
    </Container>
  );
};

export default UserReservationPage;