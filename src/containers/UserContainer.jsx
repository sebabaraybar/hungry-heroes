import React from 'react';
import businessList from '../business.json';
import { Box } from '@mui/material';
import CCard from '../components/ui/CCard/CCard';
import logo from '../media/logo.svg';
import styles from './UserContainer.module.scss';
import vars from '../styles/variables.scss';

const UserContainer = function () {
	return (
		<Box className={styles.container} >
			{businessList.map((business) => (
				<CCard 
				title={business.name}
				subtitle={business.slogan}
				alt={`Logo de ${business.name}`}
				//esto va a venir del back, ver cómo
				logo={logo}
				//hay que definir cant de caracteres
				description={business.description}
				btnTitle="Comprar"
				/>
			))}
		</Box>
	);
};

export default UserContainer;
