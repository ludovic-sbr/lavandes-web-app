import React from 'react';
import styled from "@emotion/styled";
import {Box, Container, Grid, Typography} from "@mui/material";
import AppDivider from "@/common/components/appDivider";
import StaticPageTemplate from "@/pages/templates/StaticPageTemplate";

const TitleSection = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  align-items: center;
  position: relative;
  
  background: url('https://lavandes.s3.eu-west-3.amazonaws.com/general/camping.jpg') center no-repeat;
  background-size: cover;

  &:before {
    content: "";

    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    backdrop-filter: brightness(50%);
  }
`

const UniqueSection = styled.div`
  width: 100%;
  padding: 75px 0 75px 0;
`

const AboutPage: React.FC = () => {
  return (
    <StaticPageTemplate>
      <TitleSection>
        <Container
          sx={{
            textAlign: 'center',
            color: "white",
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 1
        }}>
          <h1 style={{marginBottom: '25px'}}>Le Camping des Lavandes *****</h1>
        </Container>
      </TitleSection>
      <UniqueSection>
        <Container>
          <Box sx={{flexGrow: 1}}>
            <Grid container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Grid item xs={12} sx={{textAlign: 'center'}}>
                <Typography variant='h2'> Un site unique, en plein coeur du Luberon </Typography>
              </Grid>
              <AppDivider />
              <Grid item xs={8}>
                <Typography sx={{textAlign: 'justify'}}>
                  Lors de vos prochaines vacances, partez à la découverte de la Provence !
                  <br/><br/>
                  Idéalement situé dans la région, le Camping des Lavandes ***** vous accueille dans un site exceptionnel
                  en bord de rivière. Vous y trouverez des équipements haut de gamme et un service personnalisé :
                  location de Mobil Homes, piscine couverte et chauffée dès l’ouverture, SPA…
                  <br/><br/>
                  De plus notre équipe et notre Chef se feront un plaisir de vous accueillir dans notre Restaurant « Le
                  Mazet ».
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </UniqueSection>
    </StaticPageTemplate>
  );
};

export default AboutPage;
