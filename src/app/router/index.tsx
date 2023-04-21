import {createBrowserRouter, RouteObject} from "react-router-dom";

import Layout from '@/common/components/layout';
import {PrivateGuard, PublicGuard, TokenGuard} from './guards';
import HomePage from "@/common/pages/HomePage";
import LogoutPage from "@/features/authentication/pages/LogoutPage";
import LoginPage from "@/features/authentication/pages/LoginPage";
import RegisterPage from "@/features/authentication/pages/RegisterPage";
import CreateReservationPage from "@/features/reservation/pages/CreateReservationPage";
import ConfirmReservationPage from "@/features/reservation/pages/ConfirmReservationPage";
import CompleteReservationPage from "@/features/reservation/pages/CompleteReservationPage";
import UserPage from "@/features/user/pages/UserPage";
import UpdateUserPage from "@/features/user/pages/UpdateUserPage";
import ListLocationPage from "@/features/location/pages/ListLocationPage";
import UserReservationPage from "@/features/user/pages/UserReservationPage";
import AboutPage from "@/common/pages/AboutPage";
import ProvencePage from "@/common/pages/ProvencePage";
import ContactPage from "@/common/pages/ContactPage";
import Error404Page from "@/common/pages/Error404Page";

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
        element: <AboutPage/>,
      },
      {
        path: "/locations",
        element: <HomePage/>,
      },
      {
        path: "/provence",
        element: <ProvencePage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
    ],
  },
];

export const locationRoutes: Array<RouteObject> = [
  {
    path: '/locations',
    children: [
      {
        index: true,
        element: <ListLocationPage/>,
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
        element: <UserPage/>,
      },
      {
        path: 'update',
        children: [
          {
            index: true,
            element: <UpdateUserPage/>,
          },
        ],
      },
      {
        path: 'reservation',
        children: [
          {
            index: true,
            element: <UserReservationPage/>,
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
      ...locationRoutes,
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
            element: <Error404Page />,
          },
        ],
      },
    ],
  },
];

export const ApplicationRouter = createBrowserRouter(routes);

export default ApplicationRouter;
