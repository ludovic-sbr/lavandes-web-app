import React from 'react';
import {About, Advantages, WeAreHere, Welcome} from "../features/home";
import styled from "@emotion/styled";

const PageTemplate = styled.div`
	width: 100%;
`

const HomePage: React.FC = () => {
  return (
    <PageTemplate>
      <Welcome/>
      <About/>
      <Advantages/>
      <WeAreHere/>
    </PageTemplate>
  );
};

export default HomePage;
