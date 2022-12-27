import React from 'react';
import {Button} from "@mui/material";

const cancelButtonStyle = {
  padding: "6px 12px",

  backgroundColor: "none",
  background: "none",
  color: "#000",
  border: 'none !important',
  outline: 'none',
  borderRadius: '50px',
}

type Props = {
  value: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | undefined>;
}

export const CancelButton = ({value, disabled, onClick}: Props): JSX.Element => {
  return <Button
    variant="text"
    sx={cancelButtonStyle}
    disabled={!!disabled}
    onClick={onClick}
  >
    {value}
  </Button>;
};

export default CancelButton;