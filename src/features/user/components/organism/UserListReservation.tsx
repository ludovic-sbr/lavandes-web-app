import React from 'react';
import {useGetMyReservationsQuery} from "@/features/user/api";
import {Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DateTime} from "luxon";
import {ReservationStatusEnum} from "@/features/reservation/models/reservation";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
  if (!reservations || !reservations.length) return <div> Aucune réservation trouvée. </div>;

  return (
    <TableContainer component={Paper} sx={{mt: 2, mb: 2}}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Clé</TableCell>
            <TableCell>Du</TableCell>
            <TableCell>Au</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Prix total</TableCell>
            <TableCell>Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map((reservation) => (
            <TableRow
              key={reservation.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell component="th" scope="row">
                {reservation.reservation_key}
              </TableCell>
              <TableCell component="th" scope="row">
                {DateTime.fromISO(reservation.from).toFormat("yyyy-MM-dd")}
              </TableCell>
              <TableCell component="th" scope="row">
                {DateTime.fromISO(reservation.to).toFormat("yyyy-MM-dd")}
              </TableCell>
              <TableCell component="th" scope="row">
                {reservation.location.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {reservation.total_price}€
              </TableCell>
              <TableCell component="th" scope="row">
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserListReservation;