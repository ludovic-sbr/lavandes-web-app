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

  background: url('https://lavandes.s3.eu-west-3.amazonaws.com/general/contact.jpg') center no-repeat;
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

const ContactSection = styled.div`
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
          <h1 style={{marginBottom: '25px'}}>Nous contacter</h1>
        </Container>
      </TitleSection>
      <ContactSection>
        <Container>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={1} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Grid item sx={{textAlign: 'center'}} xs={8}>
                <Typography variant='h2'> Demande d'informations </Typography>
                <Typography variant='h4' color='#3d9b7b'>
                  Pour toute demande d’information à propos du camping ou de nos locations,
                  utilisez les coordonnées ci-dessous :
                </Typography>
              </Grid>

              <AppDivider />

              <Grid item sx={{textAlign: 'center'}} xs={8}>
                <Typography variant='h3'>
                  Ouverture et accueil
                </Typography>
                <Typography>
                  <strong>Période d’ouverture :</strong> du 03/04/2023 au 30/09/2023
                </Typography>
                <Typography>
                  <strong>Accueil :</strong> De 7h à 22h en juillet / août || De 8h à 20h en avril, mai, juin, septembre
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ContactSection>
    </StaticPageTemplate>
  );
};

export default AboutPage;
