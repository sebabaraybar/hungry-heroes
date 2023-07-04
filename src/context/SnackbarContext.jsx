import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import CSnackbar from '../components/layout/Snackbar/CSnackbar';
import { MSG_ERROR_GENERIC } from '../utils/errors';

const SnackbarContext = createContext({
	snackbar: {}
});

const SnackbarProvider = function ({ children }) {
	const [snackbar, setSnackbar] = useState({});
	const value = useMemo(() => ({snackbar, setSnackbar}), []);

	let info = {};
	if(typeof snackbar === 'string' || snackbar instanceof String) {
		info = {
			message: snackbar,
			open: !!snackbar
		};
	} else if (typeof snackbar === 'object') {
		info = {
			message: snackbar.message,
			severity: snackbar.severity,
			open: !!snackbar.message
		};
	} else {
		info = {
			message: MSG_ERROR_GENERIC,
			open: true
		};
	}

	const onClose = () => {
		setSnackbar({});
	};

	return (
		<SnackbarContext.Provider value={value}>
			{info.open && (
				<CSnackbar
				open={info.open}
				message={info.message}
				severity={info.severity}
				onClose={onClose}
				/>
			)}
			{children}
		</SnackbarContext.Provider>
	);
};

SnackbarProvider.propTypes = {
	children: PropTypes.element.isRequired
};

export {
	SnackbarContext,
	SnackbarProvider
};

// Examples:
// setSnackbar() -> Pone mensaje generico con severity por default
// setSnackbar({message: 'se produjo error'})
// setSnackbar('se produjo error mensaje solo') -> usa severity por default
// setSnackbar({message: 'se produjo error', severity: 'success'}) -> altera severity
