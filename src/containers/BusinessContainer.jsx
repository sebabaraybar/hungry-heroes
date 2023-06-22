import React, { useEffect, useState } from 'react';
import businessList from '../business.json';
import { Box } from '@mui/material';
import BusinessCard from '../components/ui/BusinessCard/BusinessCard';
import logo from '../media/logo-placeholder.png';
import styles from './BusinessContainer.module.scss';
import BusinessService from '../services/BusinessService';
import ProductService from '../services/ProductService';

const BusinessContainer = function () {

	const [businesses, setBusinesses] = useState([]);

	const handleSelectBusiness = (id) => {
		console.log(id)
		ProductService.getProductsByBusinessId(id)
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		})
	}

	useEffect(() => {
		BusinessService.getBusinesses()
	.then((response) => {
		setBusinesses(response)
		console.log(businesses)
	})
	.catch((error) => {
   console.log(error)
	})
	},[]);

	return (
		<Box className={styles.container} >
			<Box className={styles.cardContainer}>
				{businesses.map((business) => (
					<BusinessCard 
					title={business.name}
					subtitle={business.slogan}
					alt={`Logo de ${business.name}`}
					logo={logo}
					// hay que definir cant de caracteres
					description={business.description}
					// btnTitle="Comp888rar"
					onSelect={() => handleSelectBusiness(4)}
					/>
				))}
			</Box>
		</Box>
	);
};

export default BusinessContainer;
