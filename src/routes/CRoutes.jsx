import React from 'react';
import ROUTES_ENUM from '../enums/routesEnum';
import { Box } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';

function Layout() {
	return(
		<Box>
			{/* <Header />  */}
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
				path: ROUTES_ENUM.USERS,
				element: <UserPage />,
				// errorElement:
			}
		]
	);
	return <RouterProvider router={router}/>;
};

export default CRoutes;
