import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Box, Button, Divider } from '@mui/material';
import { Close } from '@mui/icons-material';
import FORMIK_PROPTYPES from '../../../modelsFormik/FormikProps';
import CIconButton from '../Button/CIconButton';
import CButton from '../Button/CButton';
import styles from './CDialog.module.scss';

const CDialog = function({
	title,
	children,
	open,
	closeModal,
	fullWidth,
	maxWidth,
	btnDialogTitle,
	btnDialogOnClick
}){

	const afterModalClose = (event, reason) => {
		if (reason === 'backdropClick') {
			return false;
		}
		if(reason === 'escapeKeyDown') {
			return false;
		}
		return closeModal();
	};

	return (
		<Dialog
			open={open}
			onClose={afterModalClose}
			fullWidth={fullWidth}
			maxWidth={maxWidth}
			disableEscapeKeyDown
			PaperProps={{
				elevation: 1
			}}
		>
			<Box className={styles.container}>
				<DialogTitle className={styles.containerheader}>
					{title}
					<CIconButton
						icon={<Close className={styles.closeicon}/>}
						onClick={closeModal}
					/>
				</DialogTitle>
				<Divider className={styles.divider}/>
				<DialogContent>
					<Box className={styles.children}>
						{children}
					</Box>
					<DialogActions className={styles.containerbtn}>
						<CButton
							type="submit"
							title={btnDialogTitle}
							onClick={btnDialogOnClick}
							sx={{fontSize: '1.2rem'}}
						/>
					</DialogActions>
				</DialogContent>
			</Box>
		</Dialog>
	);
};

CDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	fullWidth: PropTypes.bool,
	maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
	children: PropTypes.node.isRequired,
	formikRef: PropTypes.oneOfType([
    PropTypes.shape(FORMIK_PROPTYPES).isRequired,
    PropTypes.bool
  ])
};

CDialog.defaultProps = {
	maxWidth: 'sm',
	fullWidth: false,
	formikRef: false,
};

export default CDialog;
