import React from 'react';
import {Box, ButtonGroup, Grid, Modal, Typography} from "@mui/material";
import CancelButton from "@/common/components/buttons/CancelButton";
import SuccessButton from "@/common/components/buttons/SuccessButton";

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


const UpdateUserModal = ({onUpdate, showed, setShowed}: any): JSX.Element => {
  return (
    <Modal
      open={showed}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Modification de l'utilisateur
        </Typography>
        <Typography id="modal-modal-description" sx={{mt: 2}}>
          Etes-vous sûr de vouloir modifier vos informations ?
          Cette action entrainera votre déconnexion et vous devrez vous reconnecter.
        </Typography>
        <Grid sx={{display: 'flex', justifyContent: 'end'}}>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            sx={{mt: 2}}
          >
            <CancelButton onClick={() => setShowed(false)} value={'Annuler'}/>
            <SuccessButton onClick={onUpdate} value={'Confirmer'}/>
          </ButtonGroup>
        </Grid>
      </Box>
    </Modal>
  );
};

export default UpdateUserModal;