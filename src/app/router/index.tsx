import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";

import Layout from '@/common/components/layout';
import {PrivateGuard, PublicGuard, TokenGuard} from './guards';
import HomePage from "@/pages/HomePage";
import LogoutPage from "@/pages/LogoutPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import CreateReservationPage from "@/pages/CreateReservationPage";
import ConfirmReservationPage from "@/pages/ConfirmReservationPage";
import CompleteReservationPage from "@/pages/CompleteReservationPage";
import AccountPage from "@/pages/AccountPage";
import UpdateUserPage from "@/pages/UpdateUserPage";

export const mainRoutes: Array<RouteObject> = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/about",
        element: <HomePage/>,
      },
      {
        path: "/locations",
        element: <HomePage/>,
      },
      {
        path: "/cevennes",
        element: <HomePage/>,
      },
      {
        path: "/contact",
        element: <HomePage/>,
      },
    ],
  },
];

export const reservationRoutes: Array<RouteObject> = [
  {
    path: '/reservation',
    children: [
      {
        index: true,
        element: <CreateReservationPage/>,
      },
      {
        path: ':reservationId',
        children: [
          {
            path: 'confirm',
            children: [
              {
                index: true,
                element: <ConfirmReservationPage/>
              },
            ],
          },
        ],
      },
      {
        path: 'complete',
        children: [
          {
            index: true,
            element: <CompleteReservationPage/>,
          },
        ],
      },
    ],
  },
];

export const userRoutes: Array<RouteObject> = [
  {
    path: '/user',
    children: [
      {
        index: true,
        element: <AccountPage/>,
      },
      {
        path: 'update',
        children: [
          {
            index: true,
            element: <UpdateUserPage />,
          },
        ],
      },
      {
        path: 'reservation',
        children: [
          {
            index: true,
            element: (<div><h1 style={{margin: "100px"}}>Voir les réservations d'un utilisateur</h1></div>),
          },
        ],
      },
    ],
  },
];


export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      ...mainRoutes,
      {
        element: <TokenGuard/>,
        children: [
          {
            element: <PrivateGuard/>, // uniquement si connecté
            children: [
              ...reservationRoutes,
              ...userRoutes,
              {
                path: "/logout",
                element: <LogoutPage/>,
              },
            ],
          },
        ]
      },
      {
        element: <PublicGuard/>, // uniquement si déconnecté
        children: [
          {
            path: "/login",
            element: <LoginPage/>,
          },
          {
            path: "/register",
            element: <RegisterPage/>,
          },
          {
            path: '/*',
            element: <Navigate to="/" replace/>,
          },
        ],
      },
    ],
  },
];

export const ApplicationRouter = createBrowserRouter(routes);

export default ApplicationRouter;
