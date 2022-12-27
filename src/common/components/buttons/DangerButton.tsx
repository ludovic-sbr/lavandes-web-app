import React from 'react';
import {Button} from "@mui/material";

const dangerButtonStyle = {
  borderRadius: '50px',
  padding: "6px 12px",
}

type Props = {
  value: string;
  disabled?: boolean;
  submit?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | undefined>;
}

export const DangerButton = ({value, disabled, submit, onClick}: Props): JSX.Element => {
  return <Button
    type={submit ? "submit" : "button"}
    sx={dangerButtonStyle}
    disabled={!!disabled}
    onClick={onClick}
    variant={"outlined"}
    color={'error'}
  > {value} </Button>;
};

export default DangerButton;