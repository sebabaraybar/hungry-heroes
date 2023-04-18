import React from 'react';
import ROUTES_ENUM from '../enums/routesEnum';
import { Box } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RequireAuth from '../components/common/RequireAuth';
import NoRequireAuth from '../components/common/NoRequireAuth';
import LoginPage from '../pages/LoginPage';
import BusinessPage from '../pages/BusinessPage';
import Header from '../components/layout/Header';
import BoxPage from '../pages/BoxPage';
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
			// {
			// 	path: ROUTES_ENUM.ABOUT,
			// 	element: <AboutPage />
			// 	//error element
			// },
			// {
			// 	path: ROUTES_ENUM.CREATE_ACCOUNT,
			// 	element: <CreateAccountPage />
			// },
			// {
			// 	path: ROUTES_ENUM.AUTH_CHANGE_PASS,
			// 	element: <NoRequireAuth><ChangePassPage /></NoRequireAuth>
			// 	// errorElement
			// },
			// {
			// 	path: ROUTES_ENUM.AUTH_RESTORE_PASS,
			// 	element: <NoRequireAuth><RestorePassPage /></NoRequireAuth>
			// 	// errorElement
			// },
			// {
			// 	path: ROUTES_ENUM.AUTH_EMAIL_SENT,
			// 	element: <NoRequireAuth><EmailSent /></NoRequireAuth>
			// 	// errorElement
			// },
			{
				path: '/',
				// element: <RequireAuth><Layout /></RequireAuth>,
				element: <Layout />,
				// errorElement:
				children: [
					// {
					// 	path: ROUTES_ENUM.PROFILE,
					// 	element: <ProfilePage />
					// },
					{
						path: ROUTES_ENUM.BUSINESS,
						element: <BusinessPage />
						// errorElement
					},

					// ver si para los boxes se usa el mismo endpoint para ambos roles. 
					// entonces dentro de box if isAllowed && (acciones edit y delete)
					// y si is Allowed botón CREAR BOX
					{
						path: ROUTES_ENUM.BOXES,
						element: <BoxPage />
					}
				]
			}
		]
	);
	return <RouterProvider router={router}/>;
};

export default CRoutes;
