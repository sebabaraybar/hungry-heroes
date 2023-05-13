import React from 'react';
import Sales from '../components/domain/Sales/Sales';
import { Box } from '@mui/material';

import styles from './SalesContainer.module.scss';

const SalesContainer = function () {
	return (
		<Box className={styles.container}>
			<Sales />
		</Box>
	);
};

export default SalesContainer;