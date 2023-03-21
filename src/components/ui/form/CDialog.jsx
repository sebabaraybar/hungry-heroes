import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Box, Button, Divider } from '@mui/material';
import { Close } from '@mui/icons-material';
import styles from './CDialog.module.scss';

const CDialog = function({
	title,
	children,
	btnPrimary,
	btnSecondary,
	formikRef,
	open,
	closeModal,
	maxWidth
}){
	const handleClickBtnPrimary = () => {
		if(!btnPrimary.action) {
			closeModal();
			return;
		}
	};
	const handleClickBtnSecondary = () => {
		if(!btnSecondary.action) {
			closeModal();
			return;
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
			fullWidth
			maxWidth={maxWidth}
			disableEscapeKeyDown
			PaperProps={{
				elevation: 2
			}}
		>
			<Box className={styles.container}>
				<DialogTitle className={styles.containerheader}>
					{title}
					<IconButton
					size='small'
						title="Cerrar"
						onClick={closeModal}
					>
						<Close className={styles.closeicon}/>
					</IconButton>
				</DialogTitle>
				<Divider className={styles.divider}/>
				<DialogContent>
					<Box className={styles.children}>
						{children}
					</Box>
					<DialogActions className={styles.containerbtn}>
					{btnPrimary && (
							<Button
								type='button'
								size='small'
								variant= 'contained'
								onClick={handleClickBtnPrimary}
								title={btnPrimary.title}
							>{btnPrimary.title}
							</Button>
						)}
						{btnSecondary && (
							<Button
								type='button'
								size='small'
								variant='outlined'
								onClick={handleClickBtnSecondary}
								title={btnSecondary.title}
							>{btnSecondary.title}
							</Button>
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
	maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
	children: PropTypes.node.isRequired,
	formikRef: PropTypes.oneOfType([
    PropTypes.shape({
      current: PropTypes.shape({
        validateForm: PropTypes.func,
        handleSubmit: PropTypes.func,
        isValid: PropTypes.bool,
        values: PropTypes.objectOf(PropTypes.any)
      })
    }),
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

CDialog.defaultProp = {
	maxWidth: 'sm',
	btnPrimary: false,
	btnSecondary: false,
	formikRef: false,
};

export default CDialog;