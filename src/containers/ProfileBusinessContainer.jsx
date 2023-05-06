import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import FormBusiness from '../components/domain/Businesses/FormBusiness';
import styles from './ProfileBusinessContainer.module.scss';

const ProfileBusinessContainer = function () {
	const [activeBusinesses, setActiveBusiness] = useState(false);

	return (
		<Box className={styles.container}>
			<FormBusiness
				activeProfile={activeBusinesses}
			/>
		</Box>
	);
};

export default ProfileBusinessContainer;