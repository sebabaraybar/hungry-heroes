import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getHome } from '../../utils/navUtils';
import { LOCAL_STORAGE } from '../../utils/constants';

const NoRequireAuth = function ({ children }) {
	const auth = localStorage.getItem(LOCAL_STORAGE.TOKEN_LOGIN);
	const location = useLocation();

	if(auth) {
		return (
			<Navigate
				to={getHome()}
				state={{from: location}}
				replace
			/>
		);
	};
	return children;
};

NoRequireAuth.propTypes = {
	children: PropTypes.node.isRequired
};

export default NoRequireAuth;
