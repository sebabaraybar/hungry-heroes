import React from 'react';
import { Link } from 'react-router-dom';
import LargeDisplay from './LargeDisplay/LargeDisplay';
import { Box, useMediaQuery, AppBar, Toolbar } from '@mui/material';
import { getHome } from '../../../utils/navUtils';
import logo from '../../../media/logo.png'
import styles from './Header.module.scss';

const Header = function () {

	const isMobile = useMediaQuery('(max-width:1024px)');

  return (
		<AppBar
			position="static"
			className={styles.container}
		>
			<Toolbar className={styles.toolbar}>
				<Box className={styles.logoContainer}>
					<Link to={ getHome() }>
					<img
						alt="Logo de Hungry Heroes"
						src={logo}
						className={styles.logo}
					/>
					</Link>
				</Box>
				<Box className={styles.actionsContainer}>
					<LargeDisplay />
				</Box>
			</Toolbar>
		</AppBar>
  );
};

export default Header;
