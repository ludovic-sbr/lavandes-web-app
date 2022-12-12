import { Navigate, createBrowserRouter, RouteObject } from "react-router-dom";

import Layout from '@/common/components/layout';
import { TokenGuard, PrivateGuard, PublicGuard } from './guards';
import HomePage from "@/pages/HomePage";
import LogoutPage from "@/pages/LogoutPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

export const locationsRoutes: Array<RouteObject> = [
	{
		path: '/locations',
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: ':locationId',
				element: <HomePage />
			},
		],
	},
];


export const routes: Array<RouteObject> = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <HomePage />,
			},
			...locationsRoutes,
			{
				path: "/cevennes",
				element: <HomePage />,
			},
			{
				path: "/contact",
				element: <HomePage />,
			},
			{
				element: <TokenGuard />,
				children: [
					{
						element: <PrivateGuard />, // uniquement si connecté
						children: [
							{
								path: "/account",
								element: <HomePage />,
							},
							{
								path: "/my-reservations",
								element: <HomePage />,
							},
							{
								path: "/logout",
								element: <LogoutPage />,
							},
						],
					},
				]
			},
			{
				element: <PublicGuard />, // uniquement si déconnecté
				children: [
					{
						path: "/login",
						element: <LoginPage />,
					},
					{
						path: "/register",
						element: <RegisterPage />,
					},
					{
						path: '/*',
						element: <Navigate to="/" replace />,
					},
				],
			},
		],
	},
];

export const ApplicationRouter = createBrowserRouter(routes);

export default ApplicationRouter;
