import * as React from 'react';
import {Box, Divider, Grid, List, ListItem, Typography} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import {NavLink} from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#041e1c',
        color: '#fff'
      }}
    >
      <Box sx={{p: 5}}>
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Typography
              variant="h6"
              sx={{
                mr: 4,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                mb: 2
              }}
            >
              CAMPING DES LAVANDES
            </Typography>
            <Typography sx={{fontSize: "14px !important"}}>
              Camping 5 étoiles Luberon. Le Camping des Lavandes vous accueille d'avril à septembre dans un cadre
              provençal en bord de rivière. Prestations haut de gamme.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <List
              subheader={
                <>
                  <Typography variant="h4">Liens utiles</Typography>
                  <Divider sx={{width: '100px', background: "#c0c0c0", mt: 2, mb: 2}}/>
                </>
              }>
              <ListItem><NavLink to="/">Accueil</NavLink></ListItem>
              <ListItem><NavLink to="/about">Camping</NavLink></ListItem>
              <ListItem>Mentions légales</ListItem>
              <ListItem>Politique de confidentialité</ListItem>
              <ListItem>Politique de cookies</ListItem>
            </List>
          </Grid>
          <Grid item sm={4}>
            <List
              subheader={
                <>
                  <Typography variant="h4">Informations pratiques</Typography>
                  <Divider sx={{width: '100px', background: "#c0c0c0", mt: 2, mb: 2}}/>
                </>
              }>
              <ListItem>
                <LocationOnIcon sx={{mr: 1}}/> 25 Rue des Lavandes
                <br/>84160 LOURMARIN FRANCE
              </ListItem>
              <ListItem>
                <AccessTimeIcon sx={{mr: 1}}/> Période d'ouverture :
                <br/>du 03/04/2023 au 30/09/2023
              </ListItem>
              <ListItem>
                <CallIcon sx={{mr: 1}}/> +33(0)4 90 61 74 08
              </ListItem>
              <ListItem>
                <MailIcon sx={{mr: 1}}/> contact@camping-lavandes.com
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: '#021513',
          display: 'flex',
          justifyContent: 'center',
          pt: 1,
          pb: 8
        }}
      >
        <Typography sx={{ fontSize: "14px !important", fontWeight: "500", textAlign: 'center' }}>
          Tous droits réservés | © Le Camping des Lavandes | Développé par Ludovic Sobrero
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;