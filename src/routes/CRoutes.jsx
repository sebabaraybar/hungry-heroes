import React, { useEffect, useState } from 'react';
import ROUTES_ENUM from '../enums/routesEnum';
import { Box } from '@mui/material';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import RequireAuth from '../components/common/RequireAuth';
import NoRequireAuth from '../components/common/NoRequireAuth';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import BusinessPage from '../pages/BusinessPage';
import RequestPassPage from '../pages/RequestPassPage';
import RequestPassConfirmationPage from '../pages/RequestPassConfirmationPage';
import Header from '../components/layout/Header/Header';
import BoxPage from '../pages/BoxPage';
import ChangePassPage from '../pages/ChangePassPage';
import ChangePassConfirmationPage from '../pages/ChangePassConfirmationPage';
import CreateUserPage from '../pages/CreateUserPage';
import CreateUserConfirmationPage from '../pages/CreateUserConfirmationPage';
import ProfileBusinessPage from '../pages/ProfileBusinessPage';
import SalesPage from '../pages/SalesPage';
import RemoveAccountPage from '../pages/RemoveAccountPage';
import AboutPage from '../pages/AboutPage';
import ResetPassPage from '../pages/ResetPassPage';
import environments from '../api/environments';

const { IS_DEVELOPMENT } = environments;

function Layout() {
	return(
		<Box sx={{boxSizing: 'border-box'}}>
			<Header /> 
			<main>
				<Outlet />
			</main>
		</Box>
	);
}

const CRoutes = function () {

	// **************
	// método para recuperar token on resetPass
	// no tiene que estar acá
	// const location = useLocation();
	// const [token, setToken] = useState('');

	// useEffect(() => {
	// 	const searchParams = new URLSearchParams(location.search);
	// 	const tokenParam = searchParams.get('token');
	// 	if(tokenParam) {
	// 		setToken(tokenParam);
	// 	}
	// }, [location.search]);
	// **************


	const router = createBrowserRouter(
		[
			{
				path: ROUTES_ENUM.AUTH_LOGIN,
				element: <LoginPage />,
				// errorElement: IS_DEVELOPMENT ? null : <ErrorPage />
				errorElement: <ErrorPage />
			},
			{
				path: ROUTES_ENUM.AUTH_REQUEST_PASS,
				element: <RequestPassPage />,
				// errorElement: IS_DEVELOPMENT ? null : <PageError />
				errorElement: <ErrorPage />
			},
			{
				path: ROUTES_ENUM.AUTH_REQUEST_PASS_CONFIRMATION,
				element: <RequestPassConfirmationPage />,
				// errorElement: IS_DEVELOPMENT ? null : <PageError />
				errorElement: <ErrorPage />
			},
			{
				path: ROUTES_ENUM.AUTH_RESET_PASS,
				element: <ResetPassPage/>
			},
			{
				path: ROUTES_ENUM.ABOUT,
				// element:<NoRequireAuth><AboutPage /></NoRequireAuth>
				element:<AboutPage />
				//error element
			},
			{
				path: ROUTES_ENUM.CREATE_ACCOUNT,
				// element: <NoRequireAuth><CreateUserPage /></NoRequireAuth>
				element: <CreateUserPage />
			},
			{
				path: ROUTES_ENUM.CREATE_ACCOUNT_CONFIRMATION,
				// element: <NoRequireAuth><CreateUserConfirmationPage /></NoRequireAuth>
				element: <CreateUserConfirmationPage />
			},
			{
				path: ROUTES_ENUM.AUTH_CHANGE_PASS_CONFIRMATION,
				element: <NoRequireAuth><ChangePassConfirmationPage /></NoRequireAuth>
			},
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
					// 	path: ROUTES_ENUM.AUTH_LOGIN,
					// 	element: <LoginPage />,
					// 	errorElement: <ErrorPage />
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
					},
					{
						path: ROUTES_ENUM.AUTH_CHANGE_PASS,
						element: <ChangePassPage />
					},
					{
						path: ROUTES_ENUM.PROFILE,
						element: <ProfileBusinessPage />
					},
					{
						path: ROUTES_ENUM.SALES,
						element: <SalesPage />
					},
					{
						path: ROUTES_ENUM.REMOVE_ACCOUNT,
						element: <RemoveAccountPage />
					}
				]
			}
		]
	);
	return <RouterProvider router={router}/>;
};

export default CRoutes;
