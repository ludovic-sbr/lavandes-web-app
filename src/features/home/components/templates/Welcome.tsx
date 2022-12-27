import React from 'react';
import styled from "@emotion/styled";
import {Button, ButtonProps, Container} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {NavLink} from "react-router-dom";

const HomeSection = styled.div`
  width: 100%;
  height: 100vh;
  background: url('../../../../../public/website_bg.jpg') center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`

const ReservationButton = styled(Button)<ButtonProps>({
  color: "#fff !important",
  borderRadius: '50px',
  padding: "12px 24px",
  backgroundColor: "#f07c22",
  '&:hover': {
    backgroundColor: "#f38a3a",
  },
});


const Welcome = (): JSX.Element => {
  return (
    <HomeSection>
      <Container
        sx={{textAlign: 'center', color: "white", display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <h1 style={{marginBottom: '25px'}}>Camping 5 étoiles en pleine nature dans le Gard</h1>
        <p style={{marginBottom: '25px', maxWidth: '90%'}}>
          Situé en bord de rivière aux portes des Cévennes, le Camping des Gardons***** vous propose
          des prestations exceptionnelles : un espace aquatique de plus de 1000 m2 avec piscine
          couverte et chauffée, toboggans, espace spa détente, locations haut de gamme…
        </p>
        <NavLink to="/locations">
          <ReservationButton
            variant="contained"
            startIcon={<CalendarMonthIcon/>}
          >
            HEBERGEMENTS ET RESERVATIONS
          </ReservationButton>
        </NavLink>
      </Container>
    </HomeSection>
  );
};

export default Welcome;
