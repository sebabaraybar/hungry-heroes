import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import FormBusiness from '../components/domain/Businesses/FormBusiness';
import styles from './ProfileBusinessContainer.module.scss';
import BusinessService from '../services/BusinessService';
import useLoading from '../hooks/useLoading';

const ProfileBusinessContainer = function () {
	const [business, setBusiness] = useState({});
	const setLoading = useLoading();
	const businessId = localStorage.getItem('userBusinessId');
	const accountId = localStorage.getItem('id');
	const businessEmail = localStorage.getItem('email');

	useEffect(() => {
		setLoading(true)
		BusinessService.getBusinessById(businessId)
	.then((response) => {
		setBusiness(response)
		setLoading(false);
	})
	.catch((error) => {
   console.log(error)
	 setLoading(false);
	})
	},[]);

	return (
		<Box className={styles.container}>
			{Object.keys(business).length && (
				<FormBusiness
					business={business}
					accountId={accountId}
					businessEmail={businessEmail}
				/>
			)}
		</Box>
	);
};

export default ProfileBusinessContainer;