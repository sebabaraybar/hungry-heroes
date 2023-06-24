import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import FormBusiness from '../components/domain/Businesses/FormBusiness';
import styles from './ProfileBusinessContainer.module.scss';
import BusinessService from '../services/BusinessService';

const ProfileBusinessContainer = function () {
	const [business, setBusiness] = useState({});
	// INSTANCIA FINAL
	// const businessId = localStorage.getItem('businessId');
	const accountId = localStorage.getItem('id');
	const businessEmail = localStorage.getItem('email');
	const businessId = 1;
	console.log(businessId);

	useEffect(() => {
		BusinessService.getBusinessById(businessId)
	.then((response) => {
		setBusiness(response)
		console.log(business)
	})
	.catch((error) => {
   console.log(error)
	})
	},[]);

	return (
		<Box className={styles.container}>
			<FormBusiness
				business={business}
				accountId={accountId}
				businessEmail={businessEmail}
			/>
		</Box>
	);
};

export default ProfileBusinessContainer;