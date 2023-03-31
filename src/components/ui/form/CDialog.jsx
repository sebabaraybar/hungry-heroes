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
	btnPrimary,
	btnSecondary,
	formikRef,
	open,
	closeModal,
	fullWidth,
	maxWidth
}){
	const handleClickBtnPrimary = () => {
		if(!btnPrimary.onClick) {
			closeModal();
			return;
		}
		if(formikRef) {
			formikRef.current.validateForm().then(() => {
				formikRef.current.handleSubmit();
			});
		} else {
			if(btnPrimary.onClick) {
				btnPrimary.onClick();
			}
			closeModal();
		}
	};

	const handleClickBtnSecondary = () => {
		closeModal();
		if(!btnSecondary.onClick) {
			btnSecondary.onClick();
		}	
	};

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
				elevation: 2
			}}
		>
			<Box className={styles.container}>
				<DialogTitle className={styles.containerheader}>
					{title}
					<CIconButton
						icon={<Close className={styles.closeicon}/>}
						onClick={closeModal}
					>
					</CIconButton>
				</DialogTitle>
				<Divider className={styles.divider}/>
				<DialogContent>
					<Box className={styles.children}>
						{children}
					</Box>
					<DialogActions className={styles.containerbtn}>
					{btnPrimary && (
							<CButton
								// type={btnPrimary.type || 'button'}
								// size={btnPrimary.size 'small'
								// variant= 'contained'
								onClick={handleClickBtnPrimary}
								title={btnPrimary.title}
							/>
						)}
						{btnSecondary && (
							<CButton
								// type='button'
								// size='small'
								variant='outlined'
								onClick={handleClickBtnSecondary}
								title={btnSecondary.title}
							/>
						)}
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
  ]),
	btnPrimary: PropTypes.oneOfType([
		PropTypes.shape({
			title: PropTypes.string,
			action: PropTypes.func
		}).isRequired,
	PropTypes.bool
	]),
	btnSecondary: PropTypes.oneOfType([
		PropTypes.shape({
			title: PropTypes.string,
			action: PropTypes.func
		}).isRequired,
	PropTypes.bool
	]),
};

CDialog.defaultProps = {
	maxWidth: 'md',
	fullWidth: false,
	btnPrimary: false,
	btnSecondary: false,
	formikRef: false,
};

export default CDialog;