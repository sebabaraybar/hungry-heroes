import React from 'react';
import businessList from '../business.json';
import { Box } from '@mui/material';
import BusinessCard from '../components/ui/BusinessCard/BusinessCard';
import logo from '../media/logo.svg';
import styles from './BusinessContainer.module.scss';
import vars from '../styles/variables.scss';

const BusinessContainer = function () {
	return (
		<Box className={styles.container} >
			<Box className={styles.cardContainer}>
				{businessList.map((business) => (
					<BusinessCard 
					title={business.name}
					subtitle={business.slogan}
					alt={`Logo de ${business.name}`}
					// esto va a venir del back, ver cómo
					logo={logo}
					// hay que definir cant de caracteres
					description={business.description}
					btnTitle="Comprar"
					/>
				))}
			</Box>
		</Box>
	);
};

export default BusinessContainer;
