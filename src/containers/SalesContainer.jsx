import React, { useEffect, useState } from 'react';
import Sales from '../components/domain/Sales/Sales';
import { Box } from '@mui/material';

import styles from './SalesContainer.module.scss';
import SaleService from '../services/SaleService';
import useLoading from '../hooks/useLoading';
import useSnackbar from '../hooks/useSnackbar';

const SalesContainer = function () {
	const setLoading = useLoading();
	const setSnackbar = useSnackbar();
	const role = localStorage.getItem('role');
	const [salesList, setSalesList] = useState([]);

	useEffect(() => {
		setLoading(true);
		let promise;
		if (role === 'Client') {
      const clientId = localStorage.getItem('userClientId');
      promise = SaleService.getSalesByClientId(clientId);
    } else {
      const businessId = localStorage.getItem('userBusinessId');
      promise = SaleService.getSalesByBusinessId(businessId);
    }

		promise
		.then((response) => {
			setSalesList(response);
			setLoading(false);
		})
		.catch((error) => {
			console.log(error);
			setLoading(false);
			setSnackbar({message: error.message, severity: 'error'});
		})
	}, [role, setLoading, setSnackbar]);

	return (
		<Box className={styles.container}>
			<Sales
			  userType={role}
				salesList={salesList}
			/>
		</Box>
	);
};

export default SalesContainer;