import React, {useEffect} from 'react';
import {Container} from "@mui/material";

type Props = {
  children?: JSX.Element | JSX.Element[];
}

const StaticPageTemplate = ({ children }: Props): JSX.Element => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])

  return (
    <Container maxWidth={false} disableGutters>
      {children}
    </Container>
  )
};

export default StaticPageTemplate;
