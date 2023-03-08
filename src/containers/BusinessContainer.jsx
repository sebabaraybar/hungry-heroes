import React from 'react';
import boxList from '../box.json';
import { Box, Button } from '@mui/material';
import BoxCard from '../components/ui/BoxCard/BoxCard';
import logo from '../media/logo.svg';
import styles from './BusinessContainer.module.scss';

const BusinessContainer = function () {
	return (
		<Box className={styles.container}>
			<Box className={styles.btnContainer}>
				<Button
					variant='contained'
					color='secondary'
				>
						Crear Box
				</Button>
			</Box>
			<Box className={styles.cardContainer}>
				{boxList.map((box) => (
					<BoxCard
					title={box.name}
					alt={`Logo de ${box.name}`}
					//esto va a venir del back, ver cómo
					logo={logo}
					//hay que definir cant de caracteres
					description={box.detail}
					/>
				))};
			</Box>
		</Box>
	);
};

export default BusinessContainer;
