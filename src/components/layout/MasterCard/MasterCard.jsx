import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@mui/material';
// import CButton from '../../ui/Button/CButton';
import logo from '../../../media/logo.png';
import styles from './MasterCard.module.scss';

const 
MasterCard = ({ headerTitle, headerSubtitle, children, footerBtnTile, footerBtnIcon, onClick }) => {
	return(
		<Box className={styles.container}>
			
		<Card className={styles.card}>
			<Box className={styles.logocontainer}>
				<Box
					component="img"
					src={logo}
					alt= "Logo de Hungry Heroes"
				/>
			</Box>
			<Typography className={styles.headerTitle}>{headerTitle}</Typography>
			<Typography className={styles.headerSubtitle}>{headerSubtitle}</Typography>
			<Box>
				{children}
			</Box>
			{/* <Box>
				<CButton 
					variant="outlined"
					color="secondary"
					title={footerBtnTile}
					startIcon={footerBtnIcon}
					sx={{fontSize: '1.5rem'}}
					onClick={onClick}
				/>
			</Box> */}
		</Card>
		</Box>
	);
};

MasterCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	children: PropTypes.any,
};

MasterCard.defaultProps = {
	subtitle: null,
	children: null
};

export default MasterCard;