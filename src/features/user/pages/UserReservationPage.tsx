import React from 'react';
import UserListReservation from "@/features/user/components/organism/UserListReservation";
import PageTemplate from "@/common/pages/templates/PageTemplate";

const UserReservationPage: React.FC = () => {
  return (
    <PageTemplate title="Mes réservations">
      <UserListReservation/>
    </PageTemplate>
  );
};

export default UserReservationPage;