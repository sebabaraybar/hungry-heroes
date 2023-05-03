import React from 'react';
import { Box } from '@mui/material';
import FormBusiness from '../components/domain/Businesses/FormBusiness';
import styles from './ProfileBusinessContainer.module.scss';

const ProfileBusinessContainer = function () {
	return (
		<Box className={styles.container}>
			<FormBusiness />
		</Box>
	);
};

export default ProfileBusinessContainer;