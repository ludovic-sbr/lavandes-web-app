import React from 'react';
import {ListLocations} from "@/features/location";
import PageTemplate from "@/common/pages/templates/PageTemplate";

const ListLocationPage: React.FC = () => {
  return (
    <PageTemplate>
      <ListLocations/>
    </PageTemplate>
  );
};

export default ListLocationPage;