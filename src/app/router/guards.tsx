import React from "react";

import {useDispatch, useSelector} from "react-redux";
import {authenticationActions, selectIsAuthenticated, selectIsTokenExpired} from "@/features/authentication/authSlice";
import {Navigate, Outlet} from "react-router-dom";

export const TokenGuard: React.FC<React.PropsWithChildren> = (): JSX.Element => {
  const isTokenExpired = useSelector(selectIsTokenExpired);
  const dispatch = useDispatch();
  if (isTokenExpired) {
    dispatch(authenticationActions.logout());
    return <Navigate to={'/login'} replace/>;
  }

  return <Outlet/>;
};

export const PrivateGuard: React.FC<React.PropsWithChildren> = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (!isAuthenticated) return <Navigate to={'/login'} replace/>;
  return <Outlet/>;
};

export const PublicGuard: React.FC<React.PropsWithChildren> = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (isAuthenticated) return <Navigate to={'/'} replace/>;
  return <Outlet/>;
};
