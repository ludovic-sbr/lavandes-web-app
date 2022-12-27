import React from 'react';
import {Box, ButtonGroup, Grid, Modal, Typography} from "@mui/material";
import CancelButton from "@/common/components/buttons/CancelButton";
import DangerButton from "@/common/components/buttons/DangerButton";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const DeleteUserModal = ({onDelete, showed, setShowed}: any): JSX.Element => {
  return (
    <Modal
      open={showed}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Suppression de l'utilisateur
        </Typography>
        <Typography id="modal-modal-description" sx={{mt: 2}}>
          Etes-vous sûr de vouloir supprimer définitivement votre compte ?
          Cette action est irreversible et vous perdrez vos réservations en cours.
        </Typography>
        <Grid sx={{display: 'flex', justifyContent: 'end'}}>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{mt: 2}}
          >
            <CancelButton onClick={() => setShowed(false)} value={'Annuler'}/>
            <DangerButton onClick={onDelete} value={'Confirmer'}/>
          </ButtonGroup>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;