import React from 'react';
import styled from "@emotion/styled";
import {Box, Container, Grid, Typography} from "@mui/material";
import AppDivider from "@/common/components/appDivider";
import StaticPageTemplate from "@/common/pages/templates/StaticPageTemplate";

const TitleSection = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  align-items: center;
  position: relative;
  
  background: url('https://lavandes.s3.eu-west-3.amazonaws.com/general/provence.jpg') center no-repeat;
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

const RegionSection = styled.div`
  width: 100%;
  padding: 75px 0 75px 0;
`

const ProvencePage: React.FC = () => {
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
          <h1 style={{marginBottom: '25px'}}>La Provence</h1>
        </Container>
      </TitleSection>
      <RegionSection>
        <Container>
          <Box sx={{flexGrow: 1}}>
            <Grid container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Grid item xs={12} sx={{textAlign: 'center'}}>
                <Typography variant='h2'> Une région pleine d'émotion à découvrir</Typography>
              </Grid>
              <AppDivider />
              <Grid item xs={8}>
                <Typography sx={{textAlign: 'justify'}}>
                  Bienvenue dans le Vaucluse, une région du Sud de la France au coeur d’un territoire exceptionnel,
                  source inépuisable de surprises et de dépaysement. La Provence vous offre un cadre de vie
                  chaleureux avec un patrimoine remarquable, des grands espaces naturels et de nombreuses activités
                  culturelles et sportives. Tout est réuni pour que vos vacances soient réussies !
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </RegionSection>
    </StaticPageTemplate>
  );
};

export default ProvencePage;
