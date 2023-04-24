import React from 'react';
import { useNavigate } from 'react-router-dom';
import MasterCard from '../../layout/MasterCard/MasterCard';
import { LoginRounded } from '@mui/icons-material';
import ROUTES_ENUM from '../../../enums/routesEnum';

const ChangePassConfirmation = function () {
	const navigate = useNavigate();

	return (
		<MasterCard
			logoComponent
			headerTitle="Ya cambiamos tu contraseña"
			headerSubtitle={`Por favor, volvé a ingresar a tu cuenta`}
			footerComponent
			footerBtnTitle='Ingresar a mi cuenta'
			footerBtnIcon={ <LoginRounded /> }
			onClick={() => navigate(ROUTES_ENUM.AUTH_LOGIN)}
		>
		</MasterCard>
	);
};

export default ChangePassConfirmation;
