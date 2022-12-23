import React from 'react';
import styled from "@emotion/styled";
import {Box, Container, Grid} from '@mui/material';
import swimming_pool from "../../../../../public/swimming_pool.jpg";

const AboutSection = styled.div`
	width: 100%;
	padding: 75px 0 75px 0;
`

const About = (): JSX.Element => {
  return (
    <AboutSection>
      <Container>
        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={8} sx={{display: 'flex', alignItems: 'center'}}>
            <Grid item lg={8}>
              <h2> Bienvenue au Camping des Gardons ***** </h2>
              <h3> Votre camping dans le Gard ! </h3>
              <p style={{textAlign: 'justify'}}>
                Situé à Anduze dans le Gard, en Cévennes, notre Camping 5 étoiles Cévennes vous
                accueille d'avril à septembre dans un cadre de verdure en bord de rivière. Plage
                privée, espace aquatique et de nombreuses activités vous attendent. Dans un
                véritable écrin de nature, nous vous proposons de vivre une expérience mémorable
                dans un site naturel unique en bordure de rivière et en plein coeur des Cévennes.
              </p>
            </Grid>
            <Grid item lg={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src={swimming_pool} alt="piscine" style={{maxHeight: '250px'}}/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AboutSection>
  );
};

export default About;
