import React from 'react';
import {Container} from "@mui/material";
import {ListLocations} from "@/features/location";

const ListLocationPage: React.FC = () => {
  return (
    <Container sx={{
      maxWidth: "750px !important",
      marginBottom: 15,
      marginTop: 15,
      padding: '0 !important'
    }}>
      <ListLocations/>
    </Container>
  );
};

export default ListLocationPage;