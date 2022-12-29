import React from 'react';
import {useGetMyReservationsQuery} from "@/features/user/api";
import {Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {DateTime} from "luxon";
import {ReservationStatusEnum} from "@/features/reservation/models/reservation";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {NavLink} from "react-router-dom";

const chipStyle = {
  height: '20px',

  padding: '1px',
  margin: '3px',

  fontSize: '11px',
  border: 'thin solid rgba(0,0,0,.12)',
  background: '#f3f3f3'
}

const UserListReservation = () => {
  const {data: reservations, isLoading: isLoadingReservations} = useGetMyReservationsQuery();

  if (isLoadingReservations) return <div> Chargement ... </div>;
  if (!reservations || !reservations.length) return <div> Vous n'avez aucune réservation. </div>;

  return (
    <TableContainer component={Paper} sx={{mt: 2, mb: 2}}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{textAlign: 'center'}}>
              <Typography variant="subtitle1">Numéro</Typography>
            </TableCell>
            <TableCell sx={{textAlign: 'center'}}>
              <Typography variant="subtitle1">Du</Typography>
            </TableCell>
            <TableCell sx={{textAlign: 'center'}}>
              <Typography variant="subtitle1">Au</Typography>
            </TableCell>
            <TableCell sx={{textAlign: 'center'}}>
              <Typography variant="subtitle1">Location</Typography>
            </TableCell>
            <TableCell sx={{textAlign: 'center'}}>
              <Typography variant="subtitle1">Prix</Typography>
            </TableCell>
            <TableCell sx={{textAlign: 'center'}}>
              <Typography variant="subtitle1">Statut</Typography>
            </TableCell>
            <TableCell sx={{textAlign: 'center'}}>
              <Typography variant="subtitle1">Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow
              key={reservation.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row" sx={{textAlign: 'center'}}>
                {reservation.reservation_key}
              </TableCell>
              <TableCell component="th" scope="row" sx={{textAlign: 'center'}}>
                {DateTime.fromISO(reservation.from).toFormat("yyyy-MM-dd")}
              </TableCell>
              <TableCell component="th" scope="row" sx={{textAlign: 'center'}}>
                {DateTime.fromISO(reservation.to).toFormat("yyyy-MM-dd")}
              </TableCell>
              <TableCell component="th" scope="row" sx={{textAlign: 'center'}}>
                {reservation.location.name}
              </TableCell>
              <TableCell component="th" scope="row" sx={{textAlign: 'center'}}>
                {reservation.total_price}€
              </TableCell>
              <TableCell component="th" scope="row" sx={{textAlign: 'center'}}>
                {reservation.status === ReservationStatusEnum.COMPLETE &&
                  <Chip icon={<CheckCircleOutlineIcon sx={{fontSize: 14}}/>}
                        sx={{...chipStyle, background: 'rgba(18,255,0,0.2)'}} label="Validée"/>}
                {reservation.status === ReservationStatusEnum.OPEN &&
                  <Chip icon={<PauseCircleOutlineIcon sx={{fontSize: 14}}/>}
                        sx={{...chipStyle, background: 'rgba(129,129,129,0.2)'}} label="Non payée"/>}
                {reservation.status === ReservationStatusEnum.CANCELED &&
                  <Chip icon={<ErrorOutlineIcon sx={{fontSize: 14}}/>}
                        sx={{...chipStyle, background: 'rgba(255,0,0,0.2)'}} label="Echec"/>}
              </TableCell>
              <TableCell component="th" scope="row" sx={{textAlign: 'center'}}>
                {reservation.status === ReservationStatusEnum.OPEN ?
                  <NavLink to={`/reservation/${reservation.id}/confirm`}>
                    <Typography
                      variant="caption"
                      sx={{
                        textDecoration: 'underline',
                        color: '#37a1ff',
                        cursor: 'pointer',
                      }}> Finaliser </Typography>
                  </NavLink>
                  : <Typography variant="caption"> - </Typography>
                }

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserListReservation;