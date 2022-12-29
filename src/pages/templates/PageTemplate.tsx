import React, {useEffect} from 'react';
import {Container, Typography} from "@mui/material";

type Props = {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}

const PageTemplate = ({ children, title }: Props): JSX.Element => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  return (
    <Container sx={{maxWidth: '750px !important', marginBottom: 15, marginTop: 15}}>
      {title && <Typography variant="h2"> {title} </Typography>}
      {children}
    </Container>
  )
};

export default PageTemplate;
