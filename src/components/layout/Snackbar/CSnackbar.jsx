import React from "react";
import PropTypes from 'prop-types';
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const CSnackbar = function ({
	open,
	severity,
	message,
	onClose
}) {
	const handleClose = (reason) => {
		if (reason === 'clickaway') {
			return;
		}
		onClose();
	};

	return (
		<Snackbar
		  open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center'
			}}
		>
			<Alert
			  onClose={handleClose}
				severity={severity}
				sx={{ width: '100%' }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

CSnackbar.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
	message: PropTypes.string
};

CSnackbar.defaultProps = {
	severity: 'error',
	message: null
};

export default CSnackbar;
