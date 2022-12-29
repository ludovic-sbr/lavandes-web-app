import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "@/features/authentication/authSlice";
import {css} from "@emotion/css";
import Header from "@/common/components/layout/components/Header";
import LocationsButton from "@/common/components/buttons/LocationsButton";
import Footer from "@/common/components/layout/components/Footer";

const Layout: React.FC<React.PropsWithChildren> = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />

      <div
        className={css`
          flex: 1 1 100%;
        `}
      >
        <Outlet/>
      </div>

      <Footer />

      <LocationsButton />
    </div>
  );
};

export default Layout;
