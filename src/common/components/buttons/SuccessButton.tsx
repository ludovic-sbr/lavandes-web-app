import React from 'react';
import {Button} from "@mui/material";

const successButtonStyle = {
  backgroundColor: "#f07c22",
  color: "#fff",
  border: 'none',
  outline: 'none',
  borderRadius: '50px',
  padding: "6px 12px",

  '&:hover': {
    backgroundColor: "#f38a3a",
    border: 'none',
    outline: 'none',
  },

  '&:disabled': {
    backgroundColor: "#dcdbdb",
    border: 'none',
    outline: 'none',
    boxShadow: 'none'
  },
}

type Props = {
  value: string;
  disabled?: boolean;
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | undefined>;
}

export const SuccessButton = ({value, disabled, submit, onClick}: Props): JSX.Element => {
  return <Button
    type={submit ? "submit" : "button"}
    sx={successButtonStyle}
    disabled={!!disabled}
    onClick={onClick}
  > {value} </Button>;
};

export default SuccessButton;