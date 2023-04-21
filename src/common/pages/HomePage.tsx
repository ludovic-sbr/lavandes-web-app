import React from 'react';
import styled from "@emotion/styled";
import {Box, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import AppDivider from "@/common/components/appDivider";
import StaticPageTemplate from "@/common/pages/templates/StaticPageTemplate";

const HomeSection = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  
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

const AboutSection = styled.div`
	width: 100%;
	padding: 75px 0 75px 0;
`

const AdvantagesSection = styled.div`
	width: 100%;

  display: flex;
  align-items: center;
  padding: 75px 0 75px 0;
  
	background: url('https://lavandes.s3.eu-west-3.amazonaws.com/general/riviere.jpg') center no-repeat;
	background-size: cover;
`

const WAHSection = styled.div`
  width: 100%;
  padding: 75px 0 75px 0;
`

const HomePage: React.FC = () => {
  return (
    <StaticPageTemplate>
      <HomeSection>
        <Container
          sx={{
            textAlign: 'center',
            color: "white",
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            zIndex: 1
        }}>
          <h1 style={{marginBottom: '25px'}}>Camping 5 étoiles en pleine nature dans le Luberon</h1>
          <p style={{marginBottom: '25px', maxWidth: '90%'}}>
            Situé en bord de rivière dans le Vaucluse, le Camping des Lavandes***** vous propose
            des prestations exceptionnelles : un espace aquatique de plus de 1000 m2 avec piscine
            couverte et chauffée, toboggans, espace spa détente, locations haut de gamme…
          </p>
        </Container>
      </HomeSection>
      <AboutSection>
        <Container>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={8} sx={{display: 'flex', alignItems: 'center'}}>
              <Grid item lg={8}>
                <Typography variant='h2' sx={{mb: 1}}> Bienvenue au Camping des Lavandes ***** </Typography>
                <Typography variant='h3' sx={{mb: 3}}> Votre camping dans le Luberon ! </Typography>
                <Typography style={{textAlign: 'justify'}}>
                  Situé à Lourmarin dans le Luberon, en Provence, notre Camping 5 étoiles vous
                  accueille d'avril à septembre dans un cadre de verdure en bord de rivière. Plage
                  privée, espace aquatique et de nombreuses activités vous attendent. Dans un
                  véritable écrin de nature, nous vous proposons de vivre une expérience mémorable
                  dans un site naturel unique en bordure de rivière et en plein coeur de la Provence.
                </Typography>
              </Grid>
              <Grid item lg={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={'https://lavandes.s3.eu-west-3.amazonaws.com/general/swimming_pool.jpg'} alt="piscine" style={{maxHeight: '250px'}}/>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AboutSection>
      <AdvantagesSection>
        <Container>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{color: '#fff', textAlign: 'center'}}>
                <Typography variant='h2'> Un site naturel privilégié </Typography>
              </Grid>
              <AppDivider />
              <Grid item sm={3}>
                <Card sx={{minWidth: 275, minHeight: 275, display: 'flex', alignItems: 'center'}}>
                  <CardContent sx={{textAlign: 'center'}}>
                    <Typography variant='h4' style={{marginBottom: '15px'}}>
                      Un site naturel unique
                    </Typography>
                    <Typography>
                      Situé à Lourmarin au bord de la rivière de la Durance, le Camping des Lavandes***** est
                      l'endroit idéal pour passer ses vacances dans un écrin de nature.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={3}>
                <Card sx={{minWidth: 275, minHeight: 275, display: 'flex', alignItems: 'center'}}>
                  <CardContent sx={{textAlign: 'center'}}>
                    <Typography variant='h4' style={{marginBottom: '15px'}}>
                      La rivière
                    </Typography>
                    <Typography>
                      Vous pourrez profiter de la rivière et de la plage privée du camping. Un cadre
                      unique, une eau claire et des rochers d'où vous pouvez sauter ou plonger.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={3}>
                <Card sx={{minWidth: 275, minHeight: 275, display: 'flex', alignItems: 'center'}}>
                  <CardContent sx={{textAlign: 'center'}}>
                    <Typography variant='h4' style={{marginBottom: '15px'}}>
                      La tranquilité
                    </Typography>
                    <Typography>
                      Séjourner au Camping des Lavandes*****, c'est l'occasion de se ressourcer et de
                      profiter en toute tranquillité de vos vacances.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={3}>
                <Card sx={{minWidth: 275, minHeight: 275, display: 'flex', alignItems: 'center'}}>
                  <CardContent sx={{textAlign: 'center'}}>
                    <Typography variant='h4' style={{marginBottom: '15px'}}>
                      De nombreuses activités
                    </Typography>
                    <Typography>
                      Que ce soit au sein du camping ou dans la région de la Provence, vous n'aurez pas
                      le temps de vous ennuyer.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </AdvantagesSection>
      <WAHSection>
        <Container>
          <Box sx={{flexGrow: 1}}>
            <Grid container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Grid item xs={12} sx={{textAlign: 'center'}}>
                <Typography variant='h2'> Nous sommes là pour vous ! </Typography>
              </Grid>
              <AppDivider />
              <Grid item xs={8}>
                <Typography sx={{textAlign: 'justify'}}>
                  Vous serez accueillis au Camping des Lavandes ***** dans d’excellentes conditions.
                  Notre but est d’offrir une prestation qui soit toujours de la meilleure qualité possible avec un minimum
                  d’impact, participant au respect du site naturel, par la mise en place d’action éco-responsables.
                  <br/>
                  Depuis la réservation jusqu’au séjour, le plus grand soin est apporté pour faire de votre temps de
                  vacances une pleine réussite.
                  <br/>
                  Une région agréable, un site naturel unique, des prestations très complètes et variées. Choisissez votre
                  style de vacances, en famille, entre amis ou en tête-à-tête, vous êtes toujours les bienvenus au Camping
                  des Lavandes !
                </Typography>
                <Typography variant='h5' sx={{textAlign: 'end'}}>La Direction.</Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </WAHSection>
    </StaticPageTemplate>
  );
};

export default HomePage;
