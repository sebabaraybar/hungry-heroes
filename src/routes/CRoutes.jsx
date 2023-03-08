import React from 'react';
import ROUTES_ENUM from '../enums/routesEnum';
import { Box } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import Header from '../components/layout/Header';
import BusinessPage from '../pages/BusinessPage';

function Layout() {
	return(
		<Box>
			<Header /> 
			<main>
				<Outlet />
			</main>
		</Box>
	);
}

const CRoutes = function () {
	const router = createBrowserRouter(
		[
			{
				path: ROUTES_ENUM.AUTH_LOGIN,
				element: <LoginPage />,
				// errorElement:
			},
			{
				path: '/',
				// element: <RequireAuth><Layout /></RequireAuth>,
				element: <Layout />,
				// errorElement:
				children: [
					{
						path: ROUTES_ENUM.USERS,
						element: <UserPage />
					},
					{
						path: ROUTES_ENUM.BUSINESS,
						element: <BusinessPage />
					}
				]
			}
		]
	);
	return <RouterProvider router={router}/>;
};

export default CRoutes;
