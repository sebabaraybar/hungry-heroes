import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom'
import { MenuItem, Typography }from '@mui/material';
import { getItemsForRol } from '../../../../utils/navUtils';
import styles from './CMenuItem.module.scss';

const CMenuItem = function () {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		// <>
		// 	{getItemsForRol().map((item) => (
		// 		<MenuItem
		// 			key={item.key}
		// 			className={location.pathname === item.link ? styles.navItemActive : styles.navItem }
		// 			onClick={() => navigate(item.link)}
		// 		>
		// 			<Typography>{item.label}</Typography>
		// 		</MenuItem>
				
		// 	))}
		// </>
		<>
			<MenuItem className={styles.navItem}>
				<Typography>Perfil</Typography>
			</MenuItem>
			<MenuItem className={styles.navItem}>
				<Typography>Placeholder</Typography>
			</MenuItem>
		</>
	);
};

// CMenuItem.propTypes = {
// 	item: PropTypes.shape({
// 		key: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired
// 	}).isRequired,
// 	location: PropTypes.shape({
// 		pathname: PropTypes.string.isRequired
// 	}).isRequired
// };

export default CMenuItem;
