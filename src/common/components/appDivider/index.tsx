import {Divider, Grid} from '@mui/material';
import React from 'react';
import SpaIcon from '@mui/icons-material/Spa';

const AppDivider = (): JSX.Element => {
  return (
    <Grid item mt={2} mb={2} xs={12} display='flex' justifyContent='center' alignItems='center'>
      <Divider variant="middle" sx={{ width: '250px'}}>
        <SpaIcon color={"success"} />
      </Divider>
    </Grid>
  );
};

export default AppDivider;