import React from 'react';
import businessList from '../business.json';
import { Box } from '@mui/material';
import CCard from '../components/ui/CCard/CCard';
import logo from '../media/logo.svg';
const BusinessContainer = function () {
	return (
		<Box sx={{display:"flex", gap: "1rem", padding:"5rem", justifyContent: "center"}}>
			{businessList.map((business) => (
				<CCard 
				title={business.name}
				subtitle={business.slogan}
				alt={`Logo de ${business.name}`}
				//esto va a venir del back, ver cómo
				logo={logo}
				//hay que definir cant de caracteres
				description={business.description}
				/>
			))};
		</Box>
	);
};

export default BusinessContainer;
