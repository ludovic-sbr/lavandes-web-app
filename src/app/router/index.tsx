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
import UserPage from "@/pages/UserPage";
import UpdateUserPage from "@/pages/UpdateUserPage";
import ListLocationPage from "@/pages/ListLocationPage";
import UserReservationPage from "@/pages/UserReservationPage";
import AboutPage from "@/pages/AboutPage";
import ProvencePage from "@/pages/ProvencePage";
import ContactPage from "@/pages/ContactPage";

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
            element: <Navigate to="/" replace/>,
          },
        ],
      },
    ],
  },
];

export const ApplicationRouter = createBrowserRouter(routes);

export default ApplicationRouter;
