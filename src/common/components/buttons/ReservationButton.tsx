import React from 'react';
import styled from "@emotion/styled";
import {Button, ButtonProps} from "@mui/material";

const ReservationButton = styled(Button)<ButtonProps>({
  padding: "12px 24px",

  color: "#fff !important",
  borderRadius: '50px',
  fontSize: "12px",

  backgroundColor: "#f07c22",
  '&:hover': {
    backgroundColor: "#f38a3a",
  },
});

export default ReservationButton;