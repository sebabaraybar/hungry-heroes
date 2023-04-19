import React from 'react';
import { LOCAL_STORAGE } from '../../../../utils/constants';
import CMenuItem from '../Menu/CMenuItem';
import UserMenu from '../Menu/UserMenu';
import { MenuList, Divider, Box, Typography } from '@mui/material';
import styles from './LargeDisplay.module.scss';

const LargeDisplay = function () {
	return (
		<>
			<MenuList className={styles.navigation}>
				<CMenuItem />
			</MenuList>
			<UserMenu />
		</>
	);
};

export default LargeDisplay;