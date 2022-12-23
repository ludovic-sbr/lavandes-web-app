import React from 'react';
import styled from "@emotion/styled";
import {Box, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import logo from '../../../../../public/logo-camping-arche-anduze.png';

const AdvantagesSection = styled.div`
	width: 100%;
  padding: 50px 0 50px 0;
	background: url('../../../../../public/riviere.jpg') center no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
`

const Advantages = (): JSX.Element => {
  return (
    <AdvantagesSection>
      <Container>
        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{color: '#fff', textAlign: 'center'}}>
              <h2> Un site naturel privilégié </h2>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center'}}>
              <h2> -------- !! -------- </h2>
            </Grid>
            <Grid item sm={3}>
              <Card sx={{minWidth: 275}}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                    Un site naturel unique
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'center'}}>
                    Situé à Anduze au bord de la rivière du Gardon, le Camping des Gardons***** est
                    l'endroit idéal pour passer ses vacances dans un écrin de nature.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card sx={{minWidth: 275}}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                    La rivière
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'center'}}>
                    Vous pourrez profiter de la rivière et de la plage privée du camping. Un cadre
                    unique, une eau claire et des rochers d'où vous pouvez sauter ou plonger.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card sx={{minWidth: 275}}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                    La tranquilité
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'center'}}>
                    Séjourner au Camping de l'Arche*****, c'est l'occasion de se ressourcer et de
                    profiter en toute tranquillité de vos vacances.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card sx={{minWidth: 250}}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                    De nombreuses activités
                  </Typography>
                  <Typography variant="body2" sx={{textAlign: 'center'}}>
                    Que ce soit au sein du camping ou dans la région des Cévennes, vous n'aurez pas
                    le temps de vous ennuyer.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} style={{display: 'flex', justifyContent: "center"}}>
              <img src={logo} alt="logo" style={{maxHeight: '100px'}}/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AdvantagesSection>
  );
};

export default Advantages;
