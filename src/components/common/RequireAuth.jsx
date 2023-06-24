import React from 'react';
import PropTypes from 'prop-types';
import AuthService from '../../services/AuthService';
import { Navigate, useLocation } from 'react-router-dom';
import ROUTES_ENUM from '../../enums/routesEnum';
import { LOCAL_STORAGE } from '../../utils/constants';
import { getHome, getItemsForRole } from '../../utils/navUtils';

const RequireAuth = function ({ children }) {
	const auth = localStorage.getItem('jwtToken');
	const location = useLocation();

	console.log("REQUIRE AUTH TOKEN: ", auth);

	const isAllowLocation = () => {
		// const userLocal = localStorage.getItem(LOCAL_STORAGE.USER_EMAIL);
		// const user = JSON.parse(userLocal);
		// const userLocalRole = localStorage.getItem(LOCAL_STORAGE.USER_ROLE);
		const userLocalRole = localStorage.getItem('role');
		let isAllow = false;

		const itemFound = getItemsForRole().find((item) => item.link === location.pathname && item.roles.includes(userLocalRole)
		);
		if(itemFound) {
			isAllow = true;
		}
		console.log(userLocalRole)
		console.log(itemFound);
		return isAllow;
	};

	if(!auth) {
		return (
			<Navigate
				to={getHome()}
				state={{from: location}}
				replace
		/>
		);
	}

	if(
		location.pathname === getHome()
		|| location.pathname === ROUTES_ENUM.AUTH_CHANGE_PASS
	) {
		return children;
	}

	if(isAllowLocation()) {
		return children;
	}
	
	// ingreso no permitido
	AuthService.logout();
	return (
		<Navigate 
			to={ROUTES_ENUM.AUTH_LOGIN}
			state={{from: location}}
			replace
		/>
	);
};

RequireAuth.propTypes = {
	children: PropTypes.node.isRequired
};

export default RequireAuth;
