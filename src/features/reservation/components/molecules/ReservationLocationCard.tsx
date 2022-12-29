import React from 'react';
import {Button, ButtonProps, Chip, Grid, Paper, Stack, Typography} from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';
import styled from "@emotion/styled";
import ShortcutIcon from '@mui/icons-material/Shortcut';
import {LocationModel} from "@/features/location/models/location";
import {UseFormSetValue} from "react-hook-form";
import {ReservationRequest} from "@/features/reservation/models/reservation";
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import WifiIcon from '@mui/icons-material/Wifi';
import BedIcon from "@mui/icons-material/Bed";

type Props = {
  location: LocationModel;
  setValue: UseFormSetValue<ReservationRequest>;
  selected: boolean;
};

const genPaperStyle = {
  minHeight: 250,

  background: '#fff',
  borderRadius: '4px',
  border: 'thin solid rgba(0,0,0,.12)',
  cursor: 'pointer',
}

const chipStyle = {
  height: '20px',

  padding: '1px',
  margin: '3px',

  fontSize: '11px',
  border: 'thin solid rgba(0,0,0,.12)',
  background: '#f3f3f3'
}

const ReservationButton = styled(Button)<ButtonProps>({
  color: "#fff !important",
  borderRadius: '50px',
  padding: "6px 12px",
  backgroundColor: "#f07c22",
  '&:hover': {
    backgroundColor: "#f38a3a",
  },
});

const ReservationLocationCard = ({location, setValue, selected}: Props): JSX.Element => {
  return (
    <Paper
      sx={genPaperStyle}
      onClick={() => setValue('location_id', location.id)}
      elevation={selected ? 20 : 0}>
      <Grid container padding={1} sx={{height: '100%'}}>
        <Grid
          sm={5}
          sx={{
            background: `url(${location.image.publicUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            border: 'thin solid rgba(0,0,0,.12)'
          }}
          height={250}
          width={'100%'}
        />
        <Grid sm={7} paddingLeft={1}>
          <Stack direction='column' height='100%' position='relative'>
            <Paper elevation={0} sx={{mb: 1}}>
              <Typography variant='h6'>{location.name} - {location.surface}m²</Typography>
              <Button sx={{color: '#000', fontSize: '12px'}}
                      startIcon={<GroupIcon/>}>{location.max_persons} personnes</Button>
            </Paper>
            <Paper elevation={0} sx={{mb: 1}}>
              {location.parking &&
                <Chip icon={<LocalParkingIcon sx={{fontSize: 14}}/>} sx={chipStyle} label="Parking privé"/>}
              {location.air_conditioner &&
                <Chip icon={<AcUnitIcon sx={{fontSize: 14}}/>} sx={chipStyle} label="Climatisation"/>}
              {location.heater &&
                <Chip icon={<LocalFireDepartmentIcon sx={{fontSize: 14}}/>} sx={chipStyle} label="Chauffage"/>}
              {location.barbecue &&
                <Chip icon={<OutdoorGrillIcon sx={{fontSize: 14}}/>} sx={chipStyle} label="Barbecue"/>}
              {location.wifi &&
                <Chip icon={<WifiIcon sx={{fontSize: 14}}/>} sx={chipStyle} label="Connexion internet"/>}
            </Paper>
            <Paper
              elevation={0}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                right: 0
              }}
            >
              <Button sx={{color: '#000', fontSize: '12px'}} startIcon={<ShortcutIcon/>}>A partir de 7 nuits</Button>
              <ReservationButton startIcon={<BedIcon />}>
                {location.price_per_night}€ par nuit
              </ReservationButton>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReservationLocationCard;