import React from 'react';
import { Box } from '@mui/material';
import FormUser from '../components/domain/User/FormUser';
import styles from './CreateUserContainer.module.scss';

const CreateUserContainer = function () {
	return (
		<Box className={styles.container}>
			<FormUser />
		</Box>
	);
};

export default CreateUserContainer;
