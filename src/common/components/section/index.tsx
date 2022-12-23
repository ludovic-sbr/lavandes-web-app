import React from 'react';
import styled from "@emotion/styled";

const SectionTemplate = styled.div`
	width: 100%;
	height: 100vh;
`

const Section = (children: JSX.Element) => {
  return (
    <SectionTemplate>
      {children}
    </SectionTemplate>
  );
};

export default Section;
